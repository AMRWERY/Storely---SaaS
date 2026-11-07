# Stitch Prompt Library — Store-builder SaaS

## How to use this file

1. Give Stitch the complete `design.md` file first. Treat it as the design source of truth.
2. Use the **Global instruction** below at the start of every Stitch task.
3. Send one page prompt at a time. Do not ask Stitch to generate the entire platform in one request; it will make inconsistent assumptions and omit states.
4. Ask it to reuse previously approved components and preserve the same navigation, spacing, typography, and responsive behavior.
5. Generate desktop and mobile variants for every page. For important flows, ask for connected states/prototypes.

The product name `CommerceOS` is a replaceable placeholder, not a final brand decision.

---

# A. Global instruction — include with every prompt

You are designing a premium multi-tenant e-commerce SaaS store-builder platform. Read and follow the supplied `design.md` completely. It defines the visual system, colors, typography, spacing, layout, motion, accessibility, responsive behavior, dark/light themes, English/Arabic localization, and RTL rules.

Product structure:
- Marketing website: sells the SaaS to merchants.
- Merchant dashboard: private workspace where merchants operate their stores.
- Public storefront: independent customer-facing website for each merchant, using that merchant's selected theme.
- Platform admin: private internal workspace used by the SaaS owner to manage all merchants and platform operations.

Global requirements:
- English is default and LTR. Arabic is fully localized and RTL, not just translated labels.
- Dark mode is default. Include a complete light-mode variation and a working-looking theme toggle.
- Make the design responsive for desktop, tablet, and mobile.
- Add subtle, purposeful transitions and micro-interactions. Respect reduced-motion preferences.
- Use Montserrat for Latin text and Noto Sans Arabic for Arabic text.
- Reuse the existing components and design tokens. Do not invent new colors, font families, spacing scales, or radius values.
- Include realistic fictional sample data and all relevant loading, empty, error, disabled, success, and permission states.
- Use a consistent Lucide-style outline icon family.
- Do not invent a final brand name or logo. Use the editable `CommerceOS` text placeholder.
- This is a design task. Do not write backend code or claim that real integrations are connected.
- Keep the merchant dashboard visually separate from merchant storefront themes. The merchant may customize the storefront; that must not change the platform dashboard theme.

For the requested screen, deliver a polished high-fidelity design with clear visual hierarchy, sensible content density, realistic actions, responsive states, and consistent navigation. Do not create decorative filler or add unrequested product features.

---

# B. Marketing website pages

## B1. Marketing home page

Design the public homepage for the CommerceOS store-builder SaaS. Target small and growing merchants who want to launch and manage an online store without assembling multiple tools. Create a strong hero with a clear headline, short supporting value proposition, primary CTA `Start your store`, secondary CTA `Explore themes`, and a realistic product UI preview showing the merchant dashboard connected to a beautiful sample storefront. Follow with a concise feature grid, how-it-works steps, industry examples, selected theme previews, integrations strip, merchant proof/testimonials using clearly fictional identities, pricing preview, FAQ, and conversion-focused footer. Avoid unsupported claims, fake numerical performance statistics, and overcrowded sections. Show desktop and mobile. Include dark and light mode; marketing pages may use a refined editorial layout while following `design.md` tokens.

## B2. Features overview page

Design a features landing page explaining the platform by merchant outcome rather than a flat list of software modules. Organize sections around build your store, manage products and inventory, sell and fulfil orders, accept payments, customize design, and grow the business. Use product interface previews, short descriptions, benefit-led headings, and contextual CTAs. Make the page scannable and responsive. Do not imply features are available in every plan unless the design labels them as examples.

## B3. Pricing page

Design a pricing comparison page with three plans: Starter, Growth, and Advanced. Use placeholder prices that are clearly editable; do not assert final prices. Add monthly/yearly billing toggle, plan cards, included-feature comparison, usage-limit explanation, FAQ, and a clear CTA for each plan. Include a neutral note that payment-provider fees and third-party services may be separate. Make differences understandable without burying important limits in fine print. Provide mobile-friendly comparison behavior.

## B4. Theme gallery page

Design a searchable/filterable gallery of storefront themes. Include category/industry filters, free/premium labels, preview cards, desktop/mobile preview toggle, and actions to preview or select a theme. Show hover states and a theme details/preview panel. Use a wide variety of fictional storefront industries and imagery. Clearly distinguish platform theme-gallery UI from a merchant's live storefront.

## B5. Integrations directory page

Design a directory of supported integrations grouped by Payments, Shipping, Marketing, Analytics, and Other. Include search, category filters, integration cards with icon, name, short value statement, availability badge, and `View details` action. Use generic illustrative provider logos unless actual approved logos are supplied. Show connected/not-connected states without claiming live integration.

## B6. Contact / book a demo page

Design a conversion-friendly contact page with a short intro, contact/demo request form, business email, support expectations, and optional FAQ. Form fields: name, work email, business name, store URL (optional), monthly order range, and message. Include validation, submission success, and error states. Avoid collecting unnecessary sensitive information.

## B7. Help center / documentation landing page

Design a help center with prominent search, popular topics, category cards (Getting started, Products, Orders, Payments, Shipping, Store design, Domains, Billing), recently updated articles, and a support contact route. Include search-empty and no-result states.

---

# C. Authentication and onboarding

## C1. Sign up page

Design a focused account-creation page. Include email, password, confirm password if appropriate, terms acceptance, and clear password guidance. Offer social sign-in as optional visual placeholders only. Add password visibility, inline validation, loading, error, and success states. Keep the page calm and distraction-free with a small product preview.

## C2. Login page

Design a login page with email, password, show/hide password, remember-me option, forgot-password link, and sign-in CTA. Include invalid credentials, loading, and success states. Add a link to create an account. Keep security messaging concise.

## C3. Forgot/reset password pages

Design two related states: (1) request reset using email, with a generic confirmation that avoids revealing whether the account exists; (2) set a new password with validation and success state. Use consistent authentication layout.

## C4. Store creation onboarding

Design a step-by-step onboarding wizard that creates the merchant's first store. Steps: business/store name, industry, selling country/market, preferred language, store currency, and store subdomain suggestion. Show progress, back/continue controls, save-and-resume affordance, validation, and a helpful summary. Keep the number of fields per step small. Do not overwhelm first-time merchants.

## C5. Product setup onboarding

Design the next onboarding step that helps the merchant add their first product. Show a simplified product form with title, price, optional image upload, product type, inventory quantity, and a clear `Add product` action. Include `Skip for now`. Explain that more options are available later in the dashboard.

## C6. Design setup onboarding

Design a theme selection step with a small set of polished theme previews, industry filters, mobile/desktop preview, and `Use this theme`. Make the selection reversible. Include a clear step indicator and `Skip for now` if necessary.

## C7. Store launch checklist

Design the final setup step as a launch checklist: add product, select theme, add business contact details, configure payment, set shipping, preview store, publish store. Show completion status, progress, next best action, and preview/publish actions. Clearly indicate which steps are required versus recommended.

---

# D. Merchant dashboard shell and overview

## D1. Merchant dashboard application shell

Design the reusable merchant dashboard shell. Include expandable left sidebar with grouped navigation, current store switcher, top bar with search, help, notifications, language selector, dark/light toggle, and profile menu. Add active navigation states, collapsed sidebar, mobile navigation drawer, breadcrumb/page-title area, and a responsive content container. Sidebar groups: Overview; Sales; Catalog; Customers; Marketing; Online store; Sales channels; Settings. Use the exact layout and spacing rules from `design.md`.

## D2. Dashboard overview page

Design the merchant's home dashboard. Include a welcome header and selected date range; concise KPI cards (total sales, orders, average order value, conversion rate only if meaningful); sales/order trend area that does not dominate; recent orders table; top products; inventory alerts; store setup/health checklist; and contextual shortcuts. Include first-time empty dashboard state with one clear next action. Use believable fictional data and explain metric comparison periods. Include responsive mobile layout.

## D3. Global search / command panel

Design a keyboard-friendly global search overlay for products, orders, customers, and dashboard pages. Include recent searches, categorized results, keyboard shortcut hint, no-results state, loading state, and clear selected-row appearance. Ensure it remains usable with RTL.

## D4. Notifications center

Design a notification panel/page with unread count, filters, grouped recent notifications, timestamps, contextual actions, mark-as-read, and empty state. Use different but accessible icon/status patterns for orders, payments, inventory, and platform announcements.

---

# E. Catalog and inventory pages

## E1. Products list

Design a products management page with title, `Add product` CTA, search, filters (status, category, product type, inventory), sortable table, bulk selection/actions, product thumbnail, title, status, inventory, channel, price, updated date, and row menu. Include pagination, loading skeleton, empty store state, no search results, and mobile card-list alternative.

## E2. Create product page

Design a comprehensive but approachable create-product form. Sections: title and description, media gallery, pricing, compare-at price, product organization, product type, options/variants, inventory/SKU, shipping details for physical goods, sales channels, and search engine preview. Use a two-column desktop layout with a clear main form and contextual side panel; stack on mobile. Include draft/save/publish actions, unsaved changes, validation, and upload states. Do not crowd the initial view; use collapsible advanced sections.

## E3. Edit product page

Design the edit-product screen using the same structure as create product, populated with fictional existing data. Include product status, last saved time, preview action, publish/update action, and destructive archive action separated from primary actions. Show a variant summary and media management.

## E4. Variant editor

Design a variant management panel/page for options such as Size and Color. Include option values, generated variant matrix, SKU, price, compare-at price, barcode, inventory, image per variant, bulk edit, and clear warning when there are many combinations. Include add/remove option and validation states. Make it usable in RTL.

## E5. Categories / collections page

Design a product organization page with collection/category list, search, type filters (manual/automated if supported), product count, status, and actions. Include create/edit collection form with title, description, image, product assignment/rules, and storefront visibility. Show empty and mobile states.

## E6. Media library

Design a media library with grid/list view, search, upload dropzone, type filter, file details drawer, usage references, select/insert action, upload progress, file-too-large error, and empty state. Use a clear visual preview and accessible file actions.

## E7. Inventory overview

Design an inventory page with SKU, product/variant, available, reserved, on-hand, location, and low-stock status. Include search, filters, bulk adjustment, export, and an inventory adjustment side drawer with quantity, reason, and notes. Show a low-stock alert state and empty state. Keep financial and quantity numbers aligned.

## E8. Inventory locations

Design a locations page for warehouses/branches. Include location list, address, active status, inventory count, and create/edit location flow. Show a clear note when a store only has one default location. Include responsive behavior.

---

# F. Sales and customer pages

## F1. Orders list

Design an orders page with filter tabs for all/open/unfulfilled/paid/cancelled, search by order number/customer, date range, payment filter, fulfillment filter, and table columns for order, date, customer, channel, total, payment status, fulfillment status. Add bulk actions, export, pagination, row click, and empty/no-result states. Payment and fulfillment must be separate status indicators.

## F2. Order details page

Design a detailed order workspace. Main column: order number/date, customer, line items and variant details, fulfillment timeline, payment timeline, shipping address, notes, and activity history. Side column: order/payment/fulfillment statuses, totals breakdown, customer summary, shipping/tracking actions, refund/cancel actions. Include partial refund and cancellation confirmation dialogs, loading and error states. Never make a paid/unpaid state visually ambiguous.

## F3. Fulfillment / shipment drawer

Design a contextual drawer for fulfilling an order. Include items and quantities to fulfil, shipping method, destination, carrier selector placeholder, package details, tracking number, label action placeholder, notify-customer toggle, and confirmation. Include validation, loading, success, and carrier failure states.

## F4. Customers list

Design a customer management table with name, email/phone, location, orders, lifetime spend, last order, and status/marketing consent where applicable. Include search, filters, export, segments, pagination, and mobile cards. Avoid exposing unnecessary personal data in table previews.

## F5. Customer details page

Design a customer profile with contact details, addresses, marketing consent, order history, lifetime value, notes, and activity timeline. Include edit contact and add note flows. Make privacy-sensitive actions deliberate and permission-aware.

## F6. Abandoned carts page

Design an abandoned carts list with customer/contact where available, cart value, items, last activity, recovery status, and action to copy/send a recovery link. Clearly distinguish anonymous carts from identified customers. Include empty state and opt-in/consent context where appropriate.

---

# G. Marketing and content pages

## G1. Discounts list

Design a discounts page with discount code, type, value, usage, status, start/end date, and eligibility summary. Include filters, create discount CTA, bulk actions, expired/active/scheduled states, and empty state.

## G2. Create discount page

Design a discount creation form supporting percentage, fixed amount, free shipping, and buy-X-get-Y as future/optional types. Include code, value, eligibility, minimum requirements, customer/product/collection scope, usage limits, combination rules, start/end dates, summary preview, and save/publish actions. Keep complex sections collapsed until needed.

## G3. Marketing campaigns page

Design a lightweight marketing workspace showing campaigns, channel, audience, status, scheduled date, results, and create campaign action. Label unavailable integrations as connectable placeholders. Include campaign empty state and filters.

## G4. Store pages / content list

Design a content management list for static pages such as About, Contact, FAQ, Shipping policy, and Returns policy. Include title, handle/URL, visibility, last updated, page template, search, create page, and row actions.

## G5. Page editor

Design a structured page editor with page title, URL handle, SEO fields, content editing area, template selection, visibility status, draft/publish, preview, save state, and mobile layout. This is a content editor, not a free-form design canvas.

## G6. Navigation editor

Design a menu/navigation editor for header and footer menus. Support nested items, drag/reorder affordance, internal page/product/collection link selection, external URL, visibility, preview, and save. Include empty menu and invalid URL states. Ensure reorder controls work conceptually with keyboard as well as pointer.

---

# H. Online store, themes, and domains

## H1. Online store overview

Design the merchant's online store hub with current theme, published/draft state, store URL, preview, edit theme, customize pages, manage navigation, and domain setup cards. Include a launch/health checklist and no-theme empty state.

## H2. Theme gallery inside merchant dashboard

Design the merchant's theme selection library. Include category filters, selected/current theme badge, free/premium label, live preview, apply theme confirmation, and a clear warning that applying a new theme may change layout while preserving store content. Show desktop/mobile previews.

## H3. Visual theme editor workspace

Design a sophisticated but approachable theme editor. Layout: left panel with page selector and section tree, center live storefront canvas, right panel for selected section settings, top bar with preview device selector, undo/redo, save status, preview, and publish. Include add-section library, drag/reorder, hidden section state, unsaved changes, save error, and publish confirmation. The editor must be structured around sections and blocks, not arbitrary pixel placement. Make a mobile editing mode.

## H4. Theme settings panel

Design global theme settings for logo, brand colors, typography, buttons, page width, product cards, and general style. Show live preview, reset-to-default confirmation, validation for contrast where relevant, save, and publish actions. Keep merchant's storefront style settings distinct from dashboard light/dark mode.

## H5. Domains page

Design a domain management page showing platform subdomain, connected custom domains, primary domain, verification/SSL status, DNS instructions, add-domain flow, and help link. Include pending verification, invalid DNS, certificate provisioning, active, and disconnected states. Use careful language; do not suggest a domain is active before verification.

## H6. Store preferences page

Design a store preferences form for store name, business contact details, store description, default language, supported storefront languages, timezone, currency, unit system, order ID format, and storefront password/visibility settings where applicable. Include save state, inline validation, and explanatory help.

---

# I. Payments, shipping, taxes, and notifications settings

## I1. Payments settings

Design a payments settings page showing available providers, connected/disconnected status, supported payment methods, provider setup steps, test/live mode label, and payment method visibility. Include a connect-provider drawer that explains required merchant credentials without displaying secrets. Include COD configuration as a separate method. Show incomplete onboarding and provider-error states. Do not use real credentials.

## I2. Shipping settings

Design shipping configuration with shipping zones, rates, local delivery, pickup, carrier integrations, packaging settings, and COD/settlement notes where applicable. Include create zone, add rate, edit, disable, and empty state. Make destination coverage easy to understand.

## I3. Taxes and invoices settings

Design a jurisdiction-neutral tax settings page. Include tax-inclusive/exclusive choice, configured regions/rules, product tax categories placeholder, invoice settings, business tax details, and a clear message that merchants are responsible for confirming local legal requirements. Do not hard-code one country's tax law.

## I4. Notifications settings

Design order/customer email notification settings. Show event, recipient, enabled state, template preview, edit action, sender identity, and test-email action. Include delivery failure and disabled notification state. Keep transactional notifications visually separate from marketing campaigns.

---

# J. Staff, apps, billing, and settings

## J1. Staff and roles page

Design staff management with member name/email, role, access scope, invitation status, last active, and actions. Include invite member flow, role presets, permission matrix, pending invitations, and removal confirmation. Clearly distinguish account owner from staff.

## J2. Apps and integrations page

Design an installed-apps area with app icon, name, category, permission summary, connection status, last sync, settings, and uninstall. Add a discover-apps route. Show permission review before install and an uninstall warning explaining data/access consequences.

## J3. Plan and billing page

Design a merchant subscription page with current plan, billing cycle, next renewal, payment method, invoices, usage against plan limits, upgrade/downgrade options, and cancel subscription flow. Show failed payment/grace period state with clear next step. Avoid deceptive urgency.

## J4. Invoices and billing history

Design a billing history table with invoice number, date, amount, currency, status, and download action. Include filters, pagination, no-invoice state, and failed payment notice.

## J5. General settings page

Design a settings overview with grouped cards: Store details, Users & permissions, Domains, Payments, Shipping, Taxes, Notifications, Plan & billing, and Advanced. Include descriptions and current status summaries. Use a compact, scannable layout.

## J6. Security settings page

Design a security page with password/session controls, active sessions, two-factor authentication placeholder, connected apps, and account recovery options. Include revoke-session confirmation and clear last-used metadata. Never display secrets.

---

# K. Platform administration pages

## K1. Platform admin shell

Design a separate internal application shell for the SaaS owner. Navigation: Overview, Merchants, Plans, Subscriptions, Payments/Billing, Themes, Apps, Support, Platform settings, Audit log. Include platform-wide search, admin profile, notifications, and a clear visual indicator that this is the platform administration area, not a merchant store.

## K2. Platform overview

Design an operational dashboard with MRR, active merchants, new signups, trial-to-paid conversion, churn, stores published, order volume/GMV as a platform activity metric, and service health. Clearly distinguish platform revenue from merchants' GMV. Include trends with periods and definitions, recent platform events, and merchants needing attention. Do not invent impressive numerical claims; use clearly fictional sample data.

## K3. Merchants directory

Design a searchable merchant directory with store, owner, email, plan, status, creation date, last activity, MRR, and risk/support flags. Include filters, pagination, export, and actions. Avoid dangerous one-click suspension without confirmation.

## K4. Merchant detail / support workspace

Design a merchant record with organization/store profile, owner/members, plan/subscription, domains, usage, integration status, support history, audit timeline, and operational notes. Include safe admin actions (view as support only if explicitly authorized, suspend/reactivate, change plan) with reason capture and audit logging. Do not expose payment secrets.

## K5. Plans and entitlements management

Design an internal plan manager to create/edit plans, monthly/yearly price placeholders, included features, quotas, trial period, and entitlement flags. Include plan comparison preview, draft/publish, and warnings when a plan is in use. Keep entitlement management clear and auditable.

## K6. Subscription and platform billing operations

Design a platform billing operations page with subscriptions, invoices, failed renewals, payment status, grace period, refunds/credits if supported, and filters. Distinguish merchant subscription billing from the shopper's store-order payments.

## K7. Theme management

Design an admin theme catalog where internal staff can review, publish, deprecate, version, and assign visibility/pricing to themes. Include compatibility/version metadata, preview, status, and audit history.

## K8. Apps / integrations administration

Design a platform-level integration directory with provider configuration status, scopes, webhook health, version, activation status, and incidents. Secrets must be represented as masked values and never displayed. Include test event and connection health states.

## K9. Support inbox

Design an internal support inbox with merchant, issue category, priority, status, assigned agent, last reply, and SLA indicator. Add filters, search, conversation detail, internal notes, and reply composer. Keep merchant-visible replies distinct from internal notes.

## K10. Audit log and platform settings

Design an audit log with actor, action, target, tenant/store, timestamp, IP/device metadata when appropriate, and filters. Add platform settings for domains, email, feature flags, maintenance mode, and global configuration. Sensitive changes should require confirmation and reason capture.

---

# L. Public merchant storefront pages

For all pages in this section, use a distinct merchant brand/theme, not the platform dashboard palette by default. Use the selected example brand `Northstar Goods` as fictional sample content. Storefront pages must be fast-looking, mobile-first, accessible, and conversion-oriented.

## L1. Storefront home page

Design a polished e-commerce homepage for a fictional merchant called Northstar Goods. Include announcement bar, responsive header, logo, search, account/cart actions, navigation, hero campaign, featured categories, best sellers, editorial image/text section, trust benefits, newsletter, and footer. Use realistic product photography and a coherent merchant brand. Include empty/failed image placeholders and a mobile navigation drawer.

## L2. Collection/category page

Design a product listing page with breadcrumb, collection title/description, result count, sort menu, filters (price, availability, size/color where appropriate), active filter chips, responsive product grid, pagination/load-more, and no-results state. Ensure filter controls work conceptually on mobile via a drawer.

## L3. Search results page

Design a search results page with prominent query input, result count, suggested searches, product grid, sorting/filtering, no-results suggestions, and loading state. Keep search UX consistent with the storefront header.

## L4. Product details page

Design a high-conversion product page with media gallery, image zoom affordance, title, price, compare-at price, rating placeholder, variant selectors, quantity, availability, add-to-cart, express checkout placeholder, delivery/returns summary, description, specifications, and related products. Include unavailable variant, sold-out, loading, and add-to-cart success states. Ensure sticky purchase controls work well on mobile.

## L5. Cart page and cart drawer

Design both a full cart page and a compact cart drawer. Include product thumbnail/title/variant, quantity controls, remove/save for later, price, discount field, subtotal, shipping/tax note, and proceed-to-checkout CTA. Include empty cart and cart update error states. Never imply shipping/tax is final before calculation if it is not.

## L6. Checkout page

Design a distraction-reduced checkout. Include contact details, shipping address, delivery method, payment method, order summary, discount, and final total. Support a clear COD option and online payment option as examples without asserting a specific provider. Show field validation, loading, payment pending, provider error, and retry states. Use trust cues sparingly. Design desktop and mobile carefully.

## L7. Order confirmation page

Design a confirmation screen with order number, clear confirmation status, delivery summary, items, payment state, next steps, and continue shopping CTA. Distinguish order-created from payment-confirmed states.

## L8. Customer account pages

Design customer login/register, account overview, profile/address book, order list, order detail/tracking, and password reset. Keep the visual language consistent with the merchant storefront. Include empty order history, invalid login, and loading states.

## L9. Static information pages

Design About, Contact, FAQ, Shipping policy, Returns policy, Privacy policy, and Terms pages using a consistent content template. Include readable long-form typography, table of contents for long policies, contact route, and responsive layouts. Text should be fictional placeholders, not legal advice.

## L10. Storefront 404 and unavailable states

Design branded 404, unavailable product, store temporarily unavailable, and maintenance states. These should be helpful and keep the merchant's brand visible without exposing platform internals.

---

# M. Reusable component prompts

## M1. Buttons and action groups

Create a reusable button system: primary, secondary, outline, ghost, destructive, icon-only, loading, disabled, and full-width mobile variants. Include sizes, icon placement, hover, focus, active, and RTL behavior. Follow `design.md` exactly.

## M2. Form controls

Create reusable text input, textarea, select, searchable combobox, checkbox, radio group, switch, date picker, number/currency input, file upload, and password input. Include labels, helper text, validation, disabled/read-only states, clearable controls, keyboard focus, and RTL layout.

## M3. Data table system

Create a reusable data table with sticky header, sorting, row selection, bulk action bar, column alignment, responsive behavior, pagination, loading skeleton, empty state, and no-results state. Include examples for orders and products. Keep table controls consistent.

## M4. Filters and search toolbar

Create a reusable toolbar with search, filter chips, dropdown filters, date range, saved views placeholder, clear filters, and export. Include collapsed mobile filter drawer and active-filter count.

## M5. Status badges

Create accessible badges for order, payment, fulfilment, subscription, domain, and integration statuses. Use text labels and restrained semantic colors; never rely on color alone.

## M6. Dialogs and drawers

Create confirmation dialog, destructive confirmation, create/edit side drawer, details drawer, and mobile full-screen sheet. Include focus trapping, close button, cancel/confirm actions, loading, and error handling states. Avoid nested dialogs.

## M7. Toast and inline alert system

Create success, warning, error, and information toasts plus inline alerts and banners. Include icon, concise message, optional action, dismiss behavior, and accessible announcement patterns.

## M8. Empty states

Create reusable empty states for first store, no products, no orders, no customers, no search results, no integrations, no billing history, and permission denied. Each needs a concise explanation, small illustration/icon, and one appropriate next action.

## M9. Skeleton loading system

Create skeleton components for dashboard KPI cards, data table rows, product cards, product details, order details, storefront grids, and page sections. Match final geometry and support dark/light themes.

## M10. Merchant sidebar and top bar

Create responsive reusable navigation with collapsed/expanded desktop variants, mobile drawer, active group, notification indicator, store switcher, breadcrumb, profile menu, language selector, and theme toggle. Show English and Arabic/RTL variations.

## M11. Product card system

Create storefront product cards for grid/list, sale, out-of-stock, quick-add, variant swatches, rating placeholder, and wishlist. Include hover and focus states plus responsive image ratios. Do not apply dashboard colors to the merchant theme.

## M12. Product media gallery

Create product media thumbnail rail, main image, zoom/lightbox, video placeholder, image loading state, and variant-driven image change. Include desktop and mobile patterns.

## M13. Cart item and order summary

Create reusable cart line item, quantity stepper, discount row, subtotal/shipping/tax/total breakdown, and compact sticky mobile summary. Include loading and validation states.

## M14. Storefront header and footer

Create responsive merchant storefront header with announcement bar, navigation, search, language/currency controls, account/cart icons, mobile menu, and footer with menus, policies, newsletter, and social links. Support varied merchant logos and long Arabic navigation labels.

## M15. Theme editor section library

Create the editor's add-section panel with searchable section types, categories, previews, drag/drop affordance, add action, unavailable/limit state, and mobile behavior. Sections may include hero, image/text, featured collection, product grid, testimonials, rich text, newsletter, logo list, and footer.

## M16. Analytics KPI and chart components

Create small metric cards with label, value, comparison period, trend direction, tooltip/definition, and optional small sparkline. Create accessible line/bar charts only where the page prompt requires them. Provide no-data and loading states. Do not invent metric definitions.

## M17. Language and theme switchers

Create compact language and dark/light theme menus. English is default; Arabic selection switches all relevant UI to RTL. Dark is the initial theme; light is available as a deliberate user choice. Include selected state, keyboard navigation, and no page-layout jump.

## M18. Onboarding checklist and progress stepper

Create a stepper/progress component with completed, current, optional, blocked, and error states. Include responsive compact mode and accessible labels.

## M19. Pricing plan cards and comparison table

Create reusable plan cards and feature comparison table with monthly/yearly toggle, included/limited/unavailable states, current plan, recommended-plan emphasis used sparingly, and mobile comparison layout. All prices and quotas are editable placeholders.

## M20. Notification item and activity timeline

Create notification rows and order/activity timeline items with icon, event label, actor, timestamp, status, and optional action. Ensure accessible contrast and RTL chronology.

## M21. File upload and media picker

Create drag/drop file picker, click-to-upload, progress, preview, validation error, replace/remove, and select-from-library states. Include mobile capture/upload behavior where appropriate.

## M22. Permission matrix

Create a role/permission matrix with grouped permissions, read/create/update/delete controls, inherited/preset role indicators, unsaved state, and mobile-friendly alternative. Include explanatory helper text.

---

# N. End-to-end flow prompts

## N1. New merchant to published store

Create a connected prototype covering: marketing homepage → signup → create store → add first product → choose theme → launch checklist → preview → publish success → merchant dashboard. Show validation, back navigation, and saved progress. Reuse the approved global components and keep the steps simple for a nontechnical merchant.

## N2. Shopper purchase flow

Create a connected prototype covering: storefront home → collection → product details → add to cart → cart drawer/page → checkout → payment pending/success → order confirmation. Include COD and online payment as alternative conceptual paths. Show quantity updates, invalid discount, checkout validation, and mobile interactions.

## N3. Merchant order fulfilment flow

Create a connected prototype covering: dashboard notification → orders list → order details → fulfilment drawer → shipment/tracking created → order timeline updated. Include carrier failure and retry states.

## N4. Theme editing and publishing flow

Create a connected prototype covering: Online Store → theme gallery → select theme → theme editor → add/reorder section → edit colors/typography → desktop/mobile preview → save draft → publish confirmation → published state. Include unsaved-change handling and a publish error state.

## N5. Plan upgrade flow

Create a connected prototype covering: plan/billing → compare plans → select Growth → review changes → confirm upgrade → success/updated entitlement state. Include declined payment and retry state; do not imply an upgrade succeeded before confirmation.

---

# O. Suggested design generation order

1. Global shell, buttons, form controls, cards, tables, badges, drawers, and empty states.
2. Merchant dashboard shell and overview.
3. Product list/create/edit and order list/detail.
4. Onboarding and launch checklist.
5. Storefront home, collection, product, cart, checkout, and confirmation.
6. Theme gallery and theme editor.
7. Payments, shipping, domains, billing, staff, and settings.
8. Platform admin shell and operational pages.
9. Marketing pages and integrations/help center.
10. Remaining secondary pages and alternate states.

This order establishes the highest-reuse patterns first and gives you a coherent prototype before you design every secondary screen.
