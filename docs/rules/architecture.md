# Architecture Recommendation — Store-builder SaaS

## Executive recommendation

**Use a monorepo, start with a modular monolith backend, and use a relational database such as PostgreSQL.** Keep the backend choice open until domain discovery and a small technical spike are complete, but a custom Node.js + TypeScript API is a strong fit alongside Nuxt and TypeScript.

A suitable starting stack:

- Frontend: Nuxt (current stable major), Vue 3, TypeScript.
- Styling: Tailwind CSS using centralized semantic design tokens.
- Backend: Node.js + TypeScript. Express is viable; NestJS can provide stronger module conventions as the domain grows.
- Database: PostgreSQL.
- ORM/query layer: choose Prisma or Drizzle after testing migrations, transaction behavior, tenant query patterns, and generated types.
- Cache and background work: Redis plus a queue worker when asynchronous jobs become necessary.
- Files: S3-compatible object storage and a CDN for product media and theme assets.
- Search: PostgreSQL search initially; dedicated search service only when real scale or relevance requirements justify it.
- API contract: REST/OpenAPI is a pragmatic first choice; generate a typed frontend client where possible.

Do not start with microservices. Do not create one application deployment or database for every merchant in the MVP. Design strong tenant boundaries inside a shared platform first.

## 1. Monorepo or multiple repositories?

### Recommendation: monorepo

The platform has several applications that share domain contracts, UI primitives, validation rules, localization, and design tokens. A monorepo makes it easier to change an API contract and the consuming Nuxt apps in one reviewed change. It also allows one CI pipeline to understand dependency relationships and run only affected tasks.

A monorepo does **not** mean all applications must be deployed together. Each app can have its own build, environment variables, deployment target, and release schedule.

Turborepo describes the common pattern as deployable applications under `apps/` and reusable libraries/configuration under `packages/`. See the official guide: https://turborepo.dev/docs/crafting-your-repository/structuring-a-repository

### Why not multiple repositories at the beginning?

Multiple repos are useful when teams, access controls, release cadences, and ownership boundaries are genuinely independent. For a solo developer or a small early team, they add friction:

- Shared types and validation need versioning and publishing.
- API and frontend changes require coordinated pull requests.
- Cross-project refactoring becomes slower.
- Shared linting, testing, and design tokens can drift.
- More repository and CI administration arrives before the product needs it.

### When to split later

Consider splitting a package or service only when there is a concrete reason: independent team ownership, separate security boundary, separate release cadence, different infrastructure needs, or a proven scaling bottleneck. Do not split merely because the folder has become large.

## 2. Monorepo structure

This is the structure the repository currently has. Folders marked *(planned)* are part of the target design but are not created yet.

```text
storely/
├── apps/
│   ├── marketing/              # Public SaaS website: home, features, pricing      (Nuxt, :3001)
│   ├── merchant/               # Merchant dashboard and theme editor               (Nuxt, :3002)
│   ├── storefront/             # Public storefront renderer for all merchants      (Nuxt, :3003)
│   ├── platform-admin/         # Internal platform operations dashboard            (Nuxt, :3004)
│   ├── api/                    # Backend API — empty until the backend is chosen   (planned)
│   └── worker/                 # Background jobs — empty; can begin inside the API (planned)
│
├── packages/
│   ├── core/                   # Nuxt layer `@storely/core`: owns ALL shared frontend dependencies
│   │                           #   and base config (i18n en/ar, VueUse, Pinia, VeeValidate, Icons,
│   │                           #   Tailwind Vite plugin, page/layout transitions). Extends `@storely/ui`.
│   ├── ui/                     # Nuxt layer `@storely/ui`: shared CSS (assets/css), design-token CSS,
│   │                           #   transitions, and platform-neutral components
│   │                           #   (VThemeToggle, VLocaleToggle, VLocaleOverlay), useTheme composable
│   ├── design-tokens/          # Color, typography, spacing, motion tokens (framework-neutral)
│   ├── storefront-runtime/     # Theme renderer and section registry              (stub)
│   ├── theme-contracts/        # Theme/page/section schema and versioning         (stub)
│   ├── commerce-contracts/     # Shared DTOs, enums, API contracts                (stub)
│   ├── api-client/             # Typed API client                                 (stub)
│   └── tsconfig/               # Shared TypeScript configurations
│
├── docs/
│   ├── rules/                  # Architecture, design system, founder guide, Stitch prompts
│   ├── product/                # PRD, personas, roadmap, decisions
│   ├── architecture/           # Diagrams, ADRs, threat model
│   ├── api/                    # OpenAPI exports and integration guides
│   └── runbooks/               # Operations and incident procedures
│
├── infra/                      # Deployment and infrastructure configuration
├── scripts/
├── .github/workflows/
├── package.json                # Root scripts: dev:<app>, build:<app>, dev, build
├── pnpm-workspace.yaml         # apps/* and packages/*
├── turbo.json
└── README.md
```

**Important:** `apps/storefront` is one shared storefront application that resolves the merchant from the incoming hostname/domain. Do not create a new Nuxt app for every merchant.

### Shared frontend layers

All Nuxt apps share one layer chain, so an app's `nuxt.config.ts` is only:

```ts
export default defineNuxtConfig({ extends: ['@storely/core'] })   // core -> ui
```

- **Libraries live in packages, not apps.** Apps depend only on `@storely/core` (plus `nuxt`, `vue`, `vue-router`). Add a shared library with `pnpm --filter @storely/core add <pkg>` (or `@storely/ui` for CSS/Tailwind-level dependencies).
- **Shared CSS lives in `packages/ui/assets/css/`** (`main.css` tokens + Tailwind, `transitions.css` motion). Apps should not duplicate it.
- **Locale routing:** every route is prefixed (`/en`, `/ar`); `/` redirects to the detected locale. Arabic sets `dir="rtl"` on `<html>`.
- **Theme:** dark is the default; the `.dark` class on `<html>` drives the tokens, and the choice is persisted in `localStorage` (`storely-theme`).
- **Dev ports / commands:** `pnpm dev:marketing` (3001), `pnpm dev:merchant` (3002), `pnpm dev:storefront` (3003), `pnpm dev:platform-admin` (3004).
- **Not used:** ESLint (no shared lint config package). Packages from the original proposal that are not created yet: `dashboard-ui`, `validation`, `i18n`, `utils`.

## 3. Multi-tenant architecture

A tenant is normally one merchant account or one store workspace. Decide early whether one merchant can own multiple stores. A flexible model is:

- `users`: login identities.
- `organizations`: merchant business account.
- `organization_members`: users belonging to an organization.
- `stores`: individual stores owned by an organization.
- `store_domains`: platform subdomain and custom domains mapped to a store.
- `memberships` / `roles` / `permissions`: who can do what in an organization or store.

Every store-owned record must be associated with a `store_id` (or a rigorously defined tenant identifier). Examples: products, variants, collections, inventory, orders, customers, discounts, pages, theme settings, and store integrations.

### Tenant context

For every authenticated request:

1. Authenticate the user.
2. Resolve their organization/store membership.
3. Authorize the requested action using role and permission rules.
4. Create a trusted tenant context on the server.
5. Apply that context to every database query and background job.

Never trust a client-supplied `store_id` as proof of access. Verify membership and permissions server-side. Avoid endpoints where changing an ID in the URL can expose another merchant's record (an IDOR/cross-tenant access vulnerability).

### Isolation strategy

For an MVP, a pooled database model (shared tables with tenant/store keys) is usually the most cost-effective. PostgreSQL row-level security can add defense in depth, but it must be configured and tested correctly. Composite unique constraints and indexes should include the tenant key where appropriate.

AWS documents pooled, bridge (schema-per-tenant), and silo (dedicated stack/database) models, each with different isolation, cost, and operational trade-offs: https://docs.aws.amazon.com/solutions/multi-tenant-architectures-on-aws/

Treat tenant isolation as a security property, not merely a convention. Test it explicitly.

## 4. Core backend modules

Start as one deployable modular monolith. Define module boundaries so extraction remains possible later.

1. **Identity & access:** authentication, sessions, password reset, MFA later, organizations, memberships, roles, permissions.
2. **Tenant/store management:** store creation, status, locale, timezone, currency, domains, store profile.
3. **Plans & billing:** platform plans, entitlements, subscription lifecycle, invoices, usage records, grace periods, failed payments.
4. **Catalog:** products, product types, variants, options, SKU, pricing, media, collections/categories, publication state.
5. **Inventory:** stock locations, stock levels, reservations, adjustments, low-stock rules, stock movement ledger.
6. **Cart & checkout:** cart lines, shipping address, delivery choices, discount calculation, totals, checkout session.
7. **Orders:** order snapshots, line items, customer details, status history, cancellation, returns, refunds.
8. **Payments:** provider configuration, payment intents/references, webhook processing, reconciliation, refunds.
9. **Shipping:** shipping zones, rates, carrier credentials, shipment creation, labels, tracking, delivery state.
10. **Customers:** customer profile, addresses, consent, order history, notes, segments.
11. **Promotions:** coupons, automatic discounts, eligibility, usage limits, stacking rules.
12. **Store content:** pages, menus, navigation, blog later, SEO metadata.
13. **Themes & storefront:** templates, sections, blocks, theme settings, preview/publish versions.
14. **Notifications:** email templates, order notifications, retries, event log.
15. **Integrations/apps:** OAuth or API keys, scopes, webhooks, install/uninstall, app subscriptions later.
16. **Analytics:** order events, sales aggregates, dashboard metrics, exports.
17. **Platform operations:** merchant support, moderation, feature flags, audit trails, incident tools.

## 5. Core domain concepts to model correctly

### Catalog

A product is not always one purchasable item. A product may have variants such as size or color. A variant normally owns the SKU, price, and inventory relationship. Media may be product-level or variant-specific. Define product status (draft/active/archived), product type (physical/digital/service later), options, category/collection membership, and SEO fields.

### Inventory

Inventory is not simply a `quantity` field on a product. A practical model separates stock on hand, reserved quantity, and available quantity. Later, stock may exist across multiple locations. Record adjustments with actor, reason, timestamp, and source. Prevent overselling using transactional stock reservation logic.

### Orders and states

Do not compress everything into one `status` field. An order has distinct dimensions:

- Order lifecycle: pending, confirmed, cancelled, completed, etc.
- Payment state: pending, authorized, paid, partially refunded, refunded, failed.
- Fulfillment state: unfulfilled, partially fulfilled, fulfilled, returned.
- Shipment state: label created, picked up, in transit, delivered, exception.

Keep an immutable order snapshot of item title, SKU, selected options, price, discount, taxes, and address at the time of purchase. Product edits later must not rewrite historical order facts.

### Money

Use integer minor units (for example, piastres/cents) or a carefully defined decimal strategy. Never use floating-point arithmetic for money. Store currency with the amount. Define rounding and tax calculation rules explicitly.

### Payments

There are two separate payment flows in your business:

1. **Merchant pays your SaaS:** recurring platform subscription or paid add-ons.
2. **Shopper pays the merchant:** the merchant's product order.

Do not accidentally mix these ledgers. A shopper's order payment should settle to the merchant under the agreed payment-provider arrangement. Avoid holding or moving merchant funds yourself unless you have the required provider partnership, legal structure, and compliance coverage.

Prefer a hosted checkout/provider-hosted payment experience initially where suitable; do not store raw card details. Verify provider webhooks, make handlers idempotent, and reconcile payment states with the provider. Paymob's current documentation describes hosted checkout and other integration approaches, along with cards and region-specific wallet/payment options: https://developers.paymob.com/paymob-docs/developers/quicklink-apis/overview

### Themes and page builder

Do not begin with a completely free-form pixel editor. Start with structured themes:

- A theme contains a versioned schema and a set of page templates.
- A page contains ordered sections.
- A section contains typed blocks and validated settings.
- Content and settings are stored as JSON that conforms to a versioned schema.
- A preview uses unpublished draft data.
- Publishing creates a new immutable or versioned theme snapshot.

This gives merchants flexibility without allowing arbitrary unsafe code. A future advanced developer ecosystem can support custom themes or extensions with a sandboxed contract.

## 6. Storefront and domain resolution

The public storefront should resolve a store from the hostname:

- `shopname.yourplatform.com` maps to a store.
- `www.merchant-domain.com` maps to the same store after custom-domain verification.
- The domain must be normalized and verified before activation.
- TLS certificates must be provisioned and renewed automatically through your hosting/domain infrastructure.
- Unknown domains should render a branded not-found page, not leak another store.

For SEO, render important storefront pages server-side, provide unique metadata and canonical URLs, generate sitemaps, and avoid rendering every store behind one generic title. Cache public product/collection content carefully and invalidate it when the merchant publishes changes.

## 7. Integrations and asynchronous work

Payments, shipping, email, analytics, and external apps fail independently. Do not make every external API call part of one long synchronous checkout request.

Use durable background jobs for tasks such as:

- Sending order/receipt emails.
- Creating a shipment after an order is confirmed.
- Retrying failed provider notifications.
- Processing payment/shipping webhooks.
- Generating exports and reports.
- Importing product CSV files.
- Rebuilding search indexes and sitemaps.

For webhooks: verify signatures, record the event ID, reject replays where appropriate, process idempotently, acknowledge promptly, and retry safely. Salla's developer documentation provides a useful example of an app ecosystem built around scoped APIs and webhooks: https://docs.salla.dev/

## 8. Security and reliability foundations

- Enforce tenant access in the server and database query layer.
- Use secure, HTTP-only, Secure, SameSite cookies for browser sessions where appropriate; protect state-changing requests against CSRF.
- Rate-limit login, password reset, checkout, and public endpoints.
- Validate every API payload on the server.
- Store secrets in a secrets manager/environment configuration, never in the frontend bundle.
- Keep audit records for sensitive merchant/platform actions.
- Encrypt traffic and sensitive stored values; rotate provider secrets.
- Back up databases and test restoration.
- Monitor error rates, latency, queue depth, provider failures, and tenant-specific issues.
- Use feature flags for risky launches and gradual rollouts.
- Build tenant-isolation tests for every module and cross-tenant access attempt.

## 9. Frontend application boundaries

- `merchant`: merchant operations and visual theme editor.
- `storefront`: shopper-facing store renderer; resolves store from host and loads published theme/content.
- `platform-admin`: your internal support and platform-operations experience.
- `marketing`: public acquisition and documentation pages.

Share low-level components and tokens where the interaction is the same. Do not force the storefront into the dashboard's navigation, typography density, or color choices. Do not share components just to reduce file count if the product experiences genuinely differ.

## 10. Build order

1. Domain model and tenant boundaries.
2. Authentication, organizations, stores, and permissions.
3. Product/catalog and media.
4. Storefront theme schema and first renderer.
5. Cart and checkout with one payment path.
6. Order lifecycle and merchant order management.
7. One shipping workflow and notification flow.
8. Platform subscription and plan entitlements.
9. Merchant onboarding and a publishable first store.
10. Analytics, apps, advanced builder features, and additional integrations.

The sequence can change based on validation, but tenant isolation, data modeling, and order/payment correctness should not be postponed.
