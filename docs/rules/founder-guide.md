# Founder’s Guide — Building an E-commerce Store-builder SaaS

## How to use this guide

You are learning a business and a product category before choosing the final backend. Read the sections in order. Your goal is not to build every Shopify feature. Your goal is to understand the business, choose a customer segment with a painful problem, validate that segment, and build the smallest reliable platform that solves it.

---

# Part 1 — What business are you actually building?

## 1. SaaS store builder vs. online store vs. marketplace

These are three different business models:

- **Online store:** one business sells its own products through one website.
- **Store-builder SaaS:** your company sells software to many independent merchants; each merchant operates its own store.
- **Marketplace:** one platform brings multiple sellers and shoppers together in one shared marketplace, often controlling discovery, checkout, fees, and seller rules.

Your stated idea is the second model. Do not accidentally build a marketplace unless that is a deliberate future product direction.

## 2. Multi-tenancy in plain language

Imagine an office building. Your SaaS is the building, each merchant has a private office, and the merchant's records are their private files. They share the building's elevators, electricity, security desk, and maintenance team, but one tenant must never see another tenant's documents.

In software, each merchant/store is a **tenant**. Your platform shares application infrastructure while isolating tenant data and permissions. Tenant isolation is foundational to a SaaS architecture; AWS describes identity, data isolation, compute/runtime, and operations as key building blocks: https://aws.amazon.com/isv/resources/building-blocks-of-multi-tenant/

## 3. Who pays whom?

There are two separate commercial relationships:

1. Merchant → your SaaS: subscription, add-ons, possibly usage charges.
2. Shopper → merchant: payment for goods/services ordered from that merchant.

The merchant's shopper revenue is generally not your SaaS revenue. If the platform charges a transaction fee, that is a separately defined platform charge or take rate. Payment-provider and legal arrangements must support the model you choose.

## 4. Who are your customers?

Your direct customers are merchants, not the shoppers visiting their stores. Shoppers matter because a bad storefront or checkout experience causes merchants to churn.

Potential segments include:

- Small Instagram/WhatsApp sellers moving to a real store.
- Fashion and beauty brands.
- Local electronics and accessories shops.
- Food and specialty retailers.
- Wholesalers and B2B sellers.
- Digital-product creators.
- Retailers who need online and physical inventory together.

Do not target everyone in the beginning. Pick one segment whose workflow you can understand and support well.

## 5. Positioning: why would a merchant choose you?

A weak positioning statement is: “Shopify but cheaper.” An actionable positioning statement is:

> For [a specific merchant segment] that struggles with [a frequent expensive problem], our platform helps them [measurable outcome] through [distinctive capability], without [current frustration].

Examples to investigate, not assumptions to accept:

- Launch an Arabic-first store with local payment and shipping setup that is easier for a nontechnical seller.
- Move from social-media orders to a structured catalog and order workflow.
- Manage online and physical stock without duplicate spreadsheets.
- Launch a product catalog quickly with ready-made templates for one industry.

Interview merchants before choosing the statement. Ask them to demonstrate their current order workflow; do not only ask whether they like your idea.

---

# Part 2 — The merchant journey

A store builder is a lifecycle product. A merchant should be able to move through these stages:

1. Discover your platform.
2. Compare plans and value.
3. Register and verify account details.
4. Create an organization/store.
5. Complete setup/onboarding.
6. Add products and inventory.
7. Choose and customize a theme.
8. Configure domain, shipping, payment methods, taxes, and policies.
9. Preview and publish.
10. Receive and manage orders.
11. Fulfil, ship, deliver, cancel, or refund orders.
12. Bring customers back through marketing and loyalty features.
13. Upgrade, renew, or expand to more stores and staff.

The first successful publish and the first real paid order are important activation milestones. Measure how many merchants reach them and how long it takes.

## 6. The four applications you need

### A. Marketing website

Purpose: turn a visitor into a qualified trial/signup.

Pages: home, features, pricing, templates, use cases, integrations, help/FAQ, contact, sign up, log in, legal pages.

Important content: who it serves, what it solves, real examples, how it works, pricing, proof, migration/support options.

### B. Merchant dashboard

Purpose: let merchants configure and operate their stores.

Main areas:

- Overview/dashboard.
- Products, variants, collections/categories, media.
- Inventory.
- Orders, fulfillment, cancellations, returns/refunds.
- Customers.
- Discounts and promotional tools.
- Store content/pages/navigation.
- Theme selection and editor.
- Domain setup.
- Payments, shipping, taxes, notifications.
- Staff accounts and permissions.
- Apps/integrations.
- Analytics/reports.
- Subscription, invoices, plan limits, billing settings.

### C. Public storefront

Purpose: help shoppers discover products and complete checkout.

Core pages: home, collection/category, search, product details, cart, checkout, order confirmation, customer account, order history, contact/about/policy pages, 404.

### D. Platform admin

Purpose: operate your SaaS, not individual stores.

Core areas: merchant accounts, store status, plans, subscriptions, invoices, support cases, themes, apps/integrations, platform feature flags, audit log, platform configuration, operational health.

---

# Part 3 — Commerce fundamentals you must know

## 7. Products, options, variants, SKUs

A product is the item a shopper sees. A variant is a purchasable configuration of that product.

Example: a shirt is one product, but Small/Black and Medium/White may be separate variants. Each variant may have a unique SKU, price, barcode, weight, and stock quantity. Product options describe choices such as size and color.

Important decisions:

- Physical, digital, and service products may need different fields and fulfilment behavior.
- A product can have one or many variants.
- Variant images may differ from general product images.
- Product visibility can be draft, active, archived, or scheduled later.
- Collections/categories organize products for browsing; do not confuse them with product options.
- Import/export by CSV becomes important as merchants grow.

## 8. Inventory

Inventory is not just a number on a product. At minimum, understand:

- Stock on hand: what physically exists.
- Reserved stock: allocated to open orders.
- Available stock: stock that can be sold.
- Incoming stock: purchase orders or replenishment later.
- Stock adjustment: a recorded change with reason and actor.
- Location: a store, warehouse, branch, or fulfilment location.

A product can be available in one location and unavailable in another. Prevent overselling with atomic/transactional reservation logic, not only a frontend check.

## 9. Cart and checkout

A cart is an editable intention to purchase. Checkout captures the information required to create an order and initiate payment/fulfilment.

Typical checkout steps:

1. Review cart items and quantities.
2. Capture email/phone and customer details.
3. Capture delivery address or pickup choice.
4. Calculate eligible shipping options and costs.
5. Apply valid discount codes.
6. Calculate subtotal, discount, shipping, tax, and total.
7. Select payment method.
8. Confirm the order and redirect/continue to the payment provider when applicable.
9. Confirm payment using trusted server/provider events.

The browser's success screen is not proof that money was received. Verify payment server-side and process provider webhooks reliably.

## 10. Orders, payments, fulfilment, and refunds

These are related but separate domains.

- **Order:** the commercial record of what the customer agreed to buy.
- **Payment:** the money collection state.
- **Fulfilment:** whether the merchant has prepared/dispatched the goods.
- **Shipment:** the carrier delivery process and tracking.
- **Refund:** money returned to the shopper.
- **Return:** goods sent back or otherwise handled under the merchant's policy.

Do not use one generic status to represent all of them. An order can be paid but unfulfilled, fulfilled but not delivered, or cancelled after authorization requiring a payment reversal. Store order item/price/address snapshots so later product edits do not change historical transactions.

## 11. Shipping and delivery

A merchant needs to configure where they deliver, how much delivery costs, which carriers they use, and what happens when a delivery fails.

Core concepts:

- Shipping zones and eligible destinations.
- Flat-rate, free, weight-based, price-based, and carrier-calculated rates.
- Pickup and local delivery.
- Shipment creation, waybill/label, tracking number, status updates, delivery exceptions, cancellation/return to sender.
- Cash on delivery (COD) and reconciliation of cash collected by a carrier.

For an Egypt-oriented launch, investigate local courier APIs and their actual pickup coverage, pricing, COD settlement process, return fees, and support quality. Bosta publishes an API reference: https://docs.bosta.co/api/

## 12. Payments

A payment integration is not just a button. You need merchant onboarding, provider credentials, checkout, callbacks/webhooks, refunds, settlement visibility, disputes, and reconciliation.

For an Egypt-first product, investigate cards, mobile wallets, cash on delivery, and local installment options. Paymob's developer guide lists cards, Egyptian mobile wallets, and several local payment/BNPL methods, and documents hosted checkout and custom integrations: https://developers.paymob.com/paymob-docs/developers/quicklink-apis/overview

Design principle for the first release: integrate one provider and one supported checkout path reliably before adding many providers. A hosted checkout often reduces the amount of sensitive card handling your application must own. Confirm the provider's current merchant onboarding and partner/platform terms before designing the integration.

Never store raw card numbers or CVV. Verify provider signatures, use idempotency, reconcile event status, and handle duplicate or delayed webhooks.

## 13. Taxes and invoices

Tax behavior depends on the merchant's jurisdiction, product type, customer location, and legal status. Your platform should model configurable tax rules and keep the tax amount/rate used on each order. Avoid hard-coding one country's tax rules into checkout logic. Consult qualified local accountants/legal advisers before launching tax or invoicing claims.

## 14. Store builder and themes

The theme is the design and layout system used by a merchant's public store.

A practical theme system contains:

- Theme metadata and supported version.
- Global styles: brand colors, font choices, typography scale, spacing, button and card styles.
- Page templates: home, collection, product, cart, and static pages.
- Reusable sections: announcement bar, header, hero, featured collection, image/text, testimonials, newsletter, footer.
- Section blocks: individual content items such as slides, category cards, or feature items.
- Settings schema: what merchants can edit, valid types, defaults, and constraints.
- Draft preview and publishing/version history.

Start with structured sections and blocks. A free-form drag-anywhere editor is much more expensive to build, validate, make responsive, and keep accessible.

## 15. Domains and hosting

Every merchant needs a platform subdomain and eventually a custom domain. Your platform needs hostname-to-store resolution, DNS instructions, domain verification, HTTPS certificate provisioning, primary-domain selection, redirects, and safe behavior for invalid/unverified domains.

A custom domain is part of the merchant's brand and SEO. Do not treat it as a simple text field.

## 16. SEO and performance

A store builder has two SEO audiences:

- Your SaaS website must rank for merchants looking for store software.
- Each merchant's storefront must be indexable as an independent website.

Storefront SEO needs server-rendered content, unique page titles/descriptions, canonical URLs, product structured data where valid, XML sitemaps, robots controls, clean URLs, image optimization, and sensible pagination. Do not put all store content behind client-only rendering.

## 17. Marketing and retention tools

Potential capabilities include discount codes, automatic discounts, abandoned-cart recovery, customer segments, email campaigns, product recommendations, reviews, gift cards, loyalty, affiliate/referral programs, and social channel feeds.

Do not build them all at first. Ask merchants which tools they already pay for and where their current process loses revenue or time.

## 18. Apps and integrations ecosystem

An app ecosystem lets third parties extend your platform. A mature app platform requires:

- Developer registration and app credentials.
- Merchant authorization and scoped permissions.
- API versioning and rate limits.
- Webhook subscriptions and signature verification.
- Install, configuration, permission update, and uninstall lifecycle.
- App listing, review, support, billing, and revocation.

This is a major product in itself. Build stable APIs and webhooks before creating a public app marketplace. Salla's developer documentation is a useful example of OAuth/scoped access, APIs, and webhook-based app integration: https://docs.salla.dev/

---

# Part 4 — How the business makes money

## 19. Revenue models

You can combine these models over time:

1. **Subscription plans:** monthly or yearly fees. Most predictable starting model.
2. **Transaction fee:** a percentage or fixed fee on merchant sales. Requires clear terms and careful payment-provider/legal design.
3. **Paid themes:** one-time or recurring theme purchases.
4. **Paid apps/add-ons:** charge for advanced capabilities or take a share from app developers.
5. **Domain-related revenue:** domain resale/management margin through a registrar partner.
6. **Usage-based charges:** extra staff, locations, storage, email volume, orders, or API usage.
7. **Premium services:** migration, setup, custom design, training, and support.
8. **Enterprise contracts:** higher limits, service commitments, custom integrations, and dedicated support.

Start with a simple subscription model. Do not add a transaction fee just because competitors do; it affects merchant trust and may complicate payments.

## 20. Example plan design

Do not copy competitor pricing before you know your costs and target segment. Build plans around merchant outcomes and usage limits.

| Capability | Starter | Growth | Advanced |
|---|---|---|---|
| Storefront and custom theme presets | Included | Included | Included |
| Product/order limits | Lower or fair-use | Higher | Highest/flexible |
| Staff accounts | 1–2 | Several | More / custom |
| Custom domain | Included or paid add-on | Included | Included |
| Basic reports | Included | Included | Included |
| Advanced automation | — | Limited | Included |
| Multiple inventory locations | — | Optional | Included |
| Advanced roles | — | Limited | Included |
| Priority support | — | — | Included |

Possible pricing axes: order volume, staff, locations, advanced workflows, reports, automation, support level, and integrations. Keep the base product useful; do not lock a merchant's essential ability to fulfil existing orders behind an upgrade.

## 21. Business metrics

Know what each metric means:

- **MRR:** monthly recurring subscription revenue normalized to a month.
- **ARR:** annualized recurring revenue.
- **ARPA:** average revenue per account/merchant.
- **CAC:** cost to acquire a paying merchant.
- **LTV:** estimated gross profit contribution over a customer's relationship; assumptions must be explicit.
- **Logo churn:** percentage of merchants who cancel in a period.
- **Revenue churn:** recurring revenue lost from cancellations/downgrades, net of expansion if using net revenue retention.
- **Activation:** merchants completing the meaningful setup milestone.
- **Time to first value:** time from signup to a published store or first successful order.
- **GMV:** gross merchandise value sold by merchants through the platform; it is not automatically your revenue.
- **Take rate:** platform revenue divided by GMV when the platform monetizes transactions.
- **Conversion rate:** proportion of qualified visitors who complete the defined action, such as a purchase.

Your early dashboard should measure signups, onboarding completion, stores published, time to publish, first order, paying conversion, MRR, churn, support volume, checkout failures, and platform reliability.

## 22. Unit economics and operating costs

Potential cost drivers:

- Application hosting and database.
- Product images, files, bandwidth, and CDN.
- Email/SMS/WhatsApp notification providers.
- Payment and billing-provider fees.
- Background jobs, logs, monitoring, and backups.
- Customer support and onboarding.
- Fraud, abuse, chargeback assistance, and incident response.
- Partner integrations and ongoing API maintenance.

Estimate cost per active merchant and cost per order. A merchant who pays a small monthly plan but uploads huge media, triggers large email volume, and needs frequent human support can be unprofitable. Define fair-use limits and paid expansion paths.

---

# Part 5 — How to compete without cloning everything

## 23. What to learn from Shopify, Wix, and Salla

- **Shopify:** the commerce engine, checkout reliability, integrations, multi-channel sales, plan differentiation, and extensibility. Official overview: https://help.shopify.com/en/manual/intro-to-shopify/overview
- **Wix:** the breadth of templates, visual flexibility, website content, store management, and marketing tools. Official feature guide: https://www.wix.com/ecommerce/features
- **Salla:** regionally relevant merchant workflows, Arabic/RTL, localized payments/shipping, developer APIs, and an app ecosystem. Official developer docs: https://docs.salla.dev/

The goal is not feature parity. It is a sharper solution for a defined customer.

## 24. Recommended differentiator hypotheses for Egypt / Arabic markets

Validate these hypotheses with real merchants:

- Arabic-first setup and RTL themes that are genuinely polished, not merely translated.
- Simple onboarding for merchants currently using Instagram, WhatsApp, and spreadsheets.
- Reliable COD and delivery reconciliation workflows.
- Local payment methods and clear provider onboarding.
- Ready-to-use industry templates and product data patterns.
- A straightforward store editor with good mobile usability.
- Fast human support in the merchant's preferred language.

Do not assume every Egyptian merchant wants the same payment provider, delivery provider, currency, tax model, or checkout fields. Make integrations configurable.

---

# Part 6 — Product scope and roadmap

## 25. What the first useful version should include

### MVP 1 — A merchant can create and operate a real store

- Marketing/signup/login.
- Organization and store creation.
- Store profile, default locale, timezone, and currency.
- Product create/edit/list with variants, images, price, SKU, and stock.
- A small set of collections/categories.
- Two or three polished responsive storefront themes.
- Home, collection, product, cart, checkout, and order confirmation.
- One payment integration or cash-on-delivery workflow appropriate to the first market.
- Basic shipping configuration and one delivery integration if validation requires it.
- Order list/detail and status management.
- Basic notification emails.
- Platform admin to view/suspend/support merchants.
- Tenant isolation, backups, logs, and a basic subscription/plan gate.

### MVP 2 — Improve merchant operations

- Customers and customer profiles.
- Discounts/coupons.
- CSV product import/export.
- Inventory adjustment history.
- Custom domains.
- Staff accounts and basic roles.
- Better order filtering and exports.
- Basic sales reports.
- Arabic RTL and English QA across the entire product.

### MVP 3 — Grow the platform

- Visual theme editor with sections/blocks.
- More themes and theme updates.
- Multiple payment and shipping integrations.
- Abandoned-cart recovery.
- Reviews, gift cards, and marketing integrations.
- Multiple locations and more advanced inventory.
- Apps/integration platform and developer docs.
- Advanced analytics and API access.

### Later / enterprise

- POS, B2B catalogs, multi-store organizations, advanced tax automation, multi-currency markets, headless storefront APIs, custom roles, enterprise support, and dedicated isolation options.

This roadmap is a starting hypothesis, not a universal rule. Merchant interviews and validation should change it.

## 26. What not to build first

- A public app store with third-party developers.
- A fully free-form website editor.
- A huge theme marketplace.
- Ten payment gateways and ten courier integrations.
- Microservices and Kubernetes without proven need.
- Advanced AI features that do not solve a verified merchant problem.
- Enterprise-only workflows before you have paying merchants.
- A mobile app before you know whether merchants need one.

## 27. Validate before coding

Interview 15–25 merchants across the segment you want to target. Ask them to show you:

1. How a product gets added today.
2. How orders arrive from social media or a website.
3. How they confirm customer details and stock.
4. How they arrange delivery and collect COD/online payment.
5. How they handle cancellations, refunds, and returns.
6. What tools they currently pay for.
7. What breaks most often and what it costs them.
8. What they tried before and why they stopped using it.

Then test willingness to pay with a landing page, prototype, setup service, or paid pilot. A compliment is not demand. A real commitment, deposit, pilot, or repeated use is stronger evidence.

A useful discovery output is a ranked list of pain points containing frequency, severity, current workaround, cost of the workaround, buyer, and willingness-to-pay evidence.

---

# Part 7 — Technology and operating concepts

## 28. Backend and database: what to evaluate

You can keep the final backend choice open while you learn the domain. Evaluate candidates against:

- Reliable relational transactions for stock, orders, and payment state.
- Strong authorization and tenant isolation.
- Good TypeScript support and testability.
- Migrations, indexes, reporting, and backups.
- Webhooks and background jobs.
- Provider integrations and observability.
- Operational cost and your ability to maintain it.

For this kind of relational commerce domain, PostgreSQL is a strong default. A custom Node.js/TypeScript modular monolith is a reasonable backend direction with Nuxt/TypeScript. Express can work if you enforce clear modules and validation; NestJS can provide more built-in structure. The database and domain design matter more than choosing a fashionable framework.

## 29. Monorepo vs multiple repos

Use a monorepo initially because the marketing site, merchant app, storefront, platform admin, API, shared contracts, UI, and design tokens will evolve together. Deploy them separately when useful. Split later only when ownership/security/release/scaling requirements justify it.

See `architecture.md` for the proposed structure and tenant architecture.

## 30. Testing strategy

- Unit tests: price calculations, discount eligibility, permissions, status transitions.
- Integration tests: database transactions, API modules, payment/shipping adapters.
- Tenant isolation tests: merchant A must never read or mutate merchant B's resources.
- End-to-end tests: signup → create store → add product → publish → place order → fulfil order.
- Webhook tests: invalid signatures, duplicate events, out-of-order events, retries.
- Accessibility tests: keyboard navigation, contrast, form errors.
- Visual regression tests: theme and RTL layouts.
- Load tests: storefront reads and checkout paths.

## 31. Security and trust

Tenant data isolation, authorization, secure sessions, secret management, provider webhook verification, audit logs, backups, and incident response are core product requirements. Do not rely on hiding buttons in the frontend as authorization. Do not trust a client-provided store ID. Do not store card details. Maintain a process for responding to data access incidents.

## 32. Legal and compliance work

Before launch, get appropriate local professional advice for business registration, consumer protection, privacy/data protection, tax, e-invoicing, payments, subscriptions, refunds/cancellations, marketplace/payment facilitation boundaries, and cross-border data hosting. Your software should support merchants' policies; it should not pretend to provide legal advice or guarantee compliance.

---

# Part 8 — Glossary

| Term | Meaning |
|---|---|
| SaaS | Software customers use as an ongoing hosted service. |
| Tenant | A merchant/account whose data and permissions must be isolated. |
| Multi-tenant | Multiple tenants share a platform while remaining isolated. |
| Storefront | The public website shoppers use. |
| Merchant dashboard | The private control panel a merchant uses. |
| SKU | Stock keeping unit: an identifier for a purchasable item/variant. |
| Variant | A purchasable configuration of a product. |
| Collection/category | A grouping of products for navigation and merchandising. |
| Cart | A temporary selection of products before an order. |
| Checkout | The process of capturing details and confirming a purchase. |
| Order | The recorded commercial purchase. |
| Payment intent | A provider/payment-system object representing an attempt or authorization to pay. |
| Webhook | A server-to-server event notification from an external service. |
| Idempotency | Repeating the same request/event safely without performing the action twice. |
| Fulfilment | Preparing and dispatching ordered goods. |
| COD | Cash on delivery. |
| GMV | Gross merchandise value processed/sold through merchant stores. |
| MRR / ARR | Monthly / annual recurring revenue. |
| CAC | Customer acquisition cost. |
| LTV | Lifetime value estimate. |
| Churn | Customers or recurring revenue lost over a period. |
| Theme | A reusable design system/template for a storefront. |
| Section / block | Reusable layout and content units within a theme page. |
| RLS | Row-level security in a database. |
| RBAC | Role-based access control. |
| IDOR | Insecure direct object reference; accessing a resource by changing an identifier without proper authorization. |

---

# Suggested learning sequence

1. Learn the merchant lifecycle and interview merchants.
2. Learn product catalog, variants, SKUs, inventory, and order concepts.
3. Learn checkout, payment states, shipping, COD, and refunds.
4. Learn subscriptions, pricing, MRR, churn, CAC, and unit economics.
5. Learn multi-tenant architecture, data isolation, roles, and domains.
6. Learn themes, section schemas, storefront rendering, and SEO.
7. Turn the validated scope into an MVP PRD and acceptance criteria.

The most important founder principle: **validate a specific merchant problem before investing months in building a broad platform.**
