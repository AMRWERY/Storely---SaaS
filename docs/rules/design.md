# Design System — Multi-tenant Commerce SaaS

> **Project status:** New product; no existing brand system or design references have been supplied. This is the proposed visual foundation for Stitch. The product name and logo are placeholders and must remain easy to replace.
>
> **Product surfaces:** Marketing website, merchant dashboard, public merchant storefronts, and platform administration.
>
> **Core requirements:** English is the default language; Arabic is fully supported with RTL; dark mode is the default; users can switch to light mode; interfaces must be responsive; motion must be deliberate, consistent, and accessible.

---

## 1. Product and visual direction

Create a premium, modern commerce operating system: confident, calm, precise, approachable, and highly usable. The visual language should feel like a mature B2B SaaS product rather than a generic admin template.

- **Working product label:** `CommerceOS` (placeholder only; keep it replaceable).
- **Personality:** capable, clear, trustworthy, modern, practical.
- **Visual direction:** dark-first workspace, crisp typography, generous but efficient spacing, subtle borders, restrained violet/blue highlights, clear hierarchy, and polished data-heavy tables.
- **Avoid:** noisy gradients, excessive glassmorphism, neon everywhere, oversized dashboard cards, gratuitous charts, decorative UI that harms task completion, tiny low-contrast text, and inconsistent radius/shadow styles.
- The dashboard and public storefront are different products. The dashboard uses this system; merchant storefront themes must be independently customizable and must not inherit dashboard styling by accident.

## 2. Color system

Use semantic tokens. Do not hard-code arbitrary colors inside individual components. Ensure every semantic color has accessible light and dark variants.

### 2.1 Brand palette

| Token | Hex | Usage |
|---|---:|---|
| Brand 50 | `#F5F3FF` | Very light brand surfaces |
| Brand 100 | `#EDE9FE` | Selected light backgrounds |
| Brand 300 | `#C4B5FD` | Soft emphasis |
| Brand 400 | `#A78BFA` | Dark-theme accent |
| Brand 500 | `#8B5CF6` | Primary action |
| Brand 600 | `#7C3AED` | Hover / active primary |
| Brand 700 | `#6D28D9` | Pressed state |
| Accent | `#38BDF8` | Secondary accent, links, information |
| Accent teal | `#2DD4BF` | Occasional positive highlight |

A restrained violet-to-blue gradient may be used on the marketing hero or a small decorative accent only. Do not use gradients as the default background of dashboard cards or every primary button.

### 2.2 Dark theme (default)

| Token | Hex | Usage |
|---|---:|---|
| `bg-canvas` | `#0B0F17` | Main application background |
| `bg-sidebar` | `#0E1420` | Sidebar background |
| `bg-surface` | `#111827` | Cards, menus, panels |
| `bg-surface-raised` | `#172033` | Elevated panels, selected rows |
| `bg-surface-hover` | `#1B2940` | Hover state |
| `border-subtle` | `#253247` | Standard separators |
| `border-strong` | `#35445C` | Emphasized outlines |
| `text-primary` | `#F8FAFC` | Main text |
| `text-secondary` | `#B6C2D2` | Supporting text |
| `text-muted` | `#8492A6` | Metadata, placeholders |
| `text-disabled` | `#64748B` | Disabled content |
| `focus-ring` | `#A78BFA` | Keyboard focus |

### 2.3 Light theme

| Token | Hex | Usage |
|---|---:|---|
| `bg-canvas` | `#F5F7FB` | Main application background |
| `bg-sidebar` | `#FFFFFF` | Sidebar background |
| `bg-surface` | `#FFFFFF` | Cards, menus, panels |
| `bg-surface-raised` | `#F8FAFC` | Elevated panels, selected rows |
| `bg-surface-hover` | `#F1F5F9` | Hover state |
| `border-subtle` | `#E2E8F0` | Standard separators |
| `border-strong` | `#CBD5E1` | Emphasized outlines |
| `text-primary` | `#111827` | Main text |
| `text-secondary` | `#475569` | Supporting text |
| `text-muted` | `#64748B` | Metadata, placeholders |
| `text-disabled` | `#94A3B8` | Disabled content |
| `focus-ring` | `#7C3AED` | Keyboard focus |

### 2.4 Semantic status colors

Use status colors with text/icon labels, never color alone.

| Meaning | Dark theme | Light theme |
|---|---|---|
| Success | `#34D399` | `#15803D` |
| Warning | `#FBBF24` | `#B45309` |
| Danger | `#FB7185` | `#BE123C` |
| Info | `#60A5FA` | `#1D4ED8` |
| Neutral | `#94A3B8` | `#475569` |

## 3. Typography

- **English / Latin:** Montserrat. Use 400 for body, 500 for controls, 600 for labels and section headings, 700 for page titles and high-emphasis figures.
- **Arabic:** Noto Sans Arabic as the Arabic-script fallback. Montserrat does not provide a complete Arabic glyph set, so the Arabic font is required for correct Arabic rendering. Do not mix Arabic and Latin fonts arbitrarily within a single word.
- **Fallback stacks:** `Montserrat, Noto Sans Arabic, system-ui, sans-serif` for general UI, with locale-specific font switching. Set font-feature settings appropriate for readable numerals.
- Use tabular numerals for prices, quantities, order IDs, dates, and financial metrics.

### Type scale

| Token | Size / line-height | Usage |
|---|---|---|
| Display | 48 / 56 px | Marketing hero only |
| H1 | 32 / 40 px | Page title |
| H2 | 24 / 32 px | Main section heading |
| H3 | 20 / 28 px | Card / subsection heading |
| H4 | 16 / 24 px | Small section heading |
| Body large | 16 / 26 px | Introductory text |
| Body | 14 / 22 px | Standard dashboard text |
| Body small | 13 / 20 px | Dense supporting content |
| Label | 12 / 16 px | Form labels and metadata |
| Micro | 11 / 16 px | Rare helper metadata; never for essential content |

Avoid using more than three text sizes in a single compact component. Keep page titles and section titles consistent across all dashboard routes.

## 4. Layout, spacing, and shape

- Base spacing unit: **4 px**. Common spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 px.
- Desktop dashboard: fixed/collapsible sidebar around 248 px expanded and 76 px collapsed; top bar around 64–72 px; content max width around 1440 px.
- Main content horizontal padding: 24–32 px desktop, 20 px tablet, 16 px mobile.
- Use a 12-column grid for marketing pages and flexible responsive grids for dashboards.
- Card padding: 20–24 px; compact cards 16 px; table rows 56–64 px depending on content.
- Border radius: 6 px for small controls, 8 px for inputs/buttons, 12 px for cards, 16 px for large panels/modals, 20–24 px for hero surfaces. Pills only for statuses and compact filters.
- Borders are the primary separation method. Use shadows sparingly and softly, especially in dark mode.
- Use consistent vertical rhythm. Do not create a different spacing rule for every page.

## 5. Application shell

### Merchant dashboard

- Persistent left navigation with clear grouped sections: Overview; Sales (Orders, Abandoned carts); Catalog (Products, Collections/Categories, Inventory); Customers; Marketing (Discounts, Campaigns); Store (Online store, Themes, Pages, Navigation, Domains); Sales channels / Apps; Settings.
- Top bar: current store switcher, page breadcrumbs or page context, search/command entry, help, notifications, theme toggle, language selector, and user menu.
- Keep the active route unmistakable without using a large colored block.
- Sidebar groups may collapse. On small screens use an off-canvas drawer and a compact top bar.
- Show a store context label when switching stores so the merchant always knows which store is being edited.

### Platform administration

Use a visually related but distinct shell with platform-level navigation: Overview, Merchants, Plans & subscriptions, Billing, Themes, Apps & integrations, Support, Platform settings, Audit log. Never confuse platform administration with a merchant's own dashboard.

### Marketing website

Use a separate marketing shell with a public navigation, clear CTA hierarchy, proof/feature sections, pricing, FAQ, and footer. Marketing may use larger editorial typography and more expressive imagery than the dashboard.

### Merchant storefronts

Storefronts are merchant-branded and theme-driven. Provide design controls for logo, brand colors, typography, header, footer, product cards, product page, collection page, and reusable sections. Storefront themes must remain mobile-first and conversion-oriented. The platform dashboard's dark theme setting must not force the shopper-facing storefront into dark mode.

## 6. Components and interaction patterns

- Buttons: primary, secondary, outline, ghost, destructive, icon-only. Every button needs default, hover, pressed, focus, disabled, and loading states.
- Inputs: label above input, helper/error text below, clear focus ring, required indicator where appropriate. Never communicate an error with color alone.
- Selects and comboboxes: searchable when option sets are large; show selected value clearly.
- Tables: sticky header where useful, readable row hover, bulk selection, sorting, filtering, pagination, and responsive alternative for narrow screens.
- Status badge: compact, pill-shaped, low saturation, with a short text label and optional icon.
- Dialog: use for focused confirmation or short tasks. Use a side drawer for contextual editing or larger forms. Avoid nested modals.
- Toasts: concise, non-blocking, actionable only when needed; success, warning, error, and info variants.
- Empty states: explain what the page is for, why it is empty, and the next action. Include one primary CTA.
- Loading states: skeletons should match the final content geometry. Do not replace every loading state with a spinner.
- Destructive actions: include clear consequences and require confirmation for irreversible actions.
- Forms: group related fields, use inline validation, preserve entered values after recoverable errors, and show save status.

## 7. Motion and transitions

Motion should explain hierarchy, state change, and navigation—not decorate every element.

| Token | Duration | Usage |
|---|---:|---|
| `motion-fast` | 120 ms | Hover, icon, small control feedback |
| `motion-standard` | 180 ms | Buttons, dropdowns, toggles |
| `motion-panel` | 220 ms | Drawers, dialogs, expandable panels |
| `motion-page` | 240 ms | Subtle route/content transitions |

- Use a restrained ease-out curve for entrances and ease-in for exits.
- Dropdowns: fade + 4–8 px vertical movement.
- Drawers: slide from the relevant logical edge; in Arabic RTL, respect the interface's logical direction.
- Dialogs: slight fade and 0.98-to-1 scale; avoid dramatic bounce.
- Sidebar collapse: animate width and label opacity without shifting content unpredictably.
- Table row updates: subtle background highlight, not a large animation.
- Theme switching: update immediately; a short color transition is acceptable, but avoid a long flash across the entire screen.
- Respect `prefers-reduced-motion`. When reduced motion is enabled, remove nonessential movement and preserve clear state changes.
- Never delay a user action for an animation to finish.

## 8. Internationalization and RTL

- **Default locale:** English (`en`), LTR.
- **Second locale:** Arabic (`ar`), RTL.
- Support true locale switching, not just translated button labels. Translate navigation, field labels, errors, empty states, date/number formatting, helper text, notifications, and storefront content.
- Set the document `lang` and `dir` correctly for each locale. Arabic must use `dir="rtl"` at the page/document level.
- Use CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline-start`, `text-align: start`) rather than hard-coded left/right wherever possible.
- Mirror directional controls such as back/forward arrows when their meaning is directional. Do not mirror brand marks, product imagery, play/pause, or non-directional icons.
- In RTL, ensure sidebar placement, breadcrumbs, pagination, drawers, tables, form alignment, dropdowns, and keyboard navigation are correct.
- Test mixed-content strings such as Arabic customer names plus Latin order IDs, email addresses, URLs, and prices.
- Use localized dates, numbers, and currency formatting. Never concatenate a currency symbol and amount manually when locale-aware formatting is available.

## 9. Theme behavior

- **Default theme:** dark.
- Provide a visible theme toggle in the user menu or top bar. Switching to light mode must be immediate and consistent across the entire dashboard.
- Persist the user's explicit preference. A newly created account with no saved preference starts in dark mode; the product's default must not silently be overwritten by the operating system preference.
- Theme preference belongs to the user/profile, not the store's customer-facing theme.
- All components, charts, image placeholders, code panels, dialogs, and editor surfaces need both themes.
- Prevent a flash of the wrong theme during application startup.

## 10. Responsive behavior

- Desktop: 1440 px and above; full navigation and multi-column workspaces.
- Laptop: 1024–1439 px; compact navigation and fewer columns.
- Tablet: 768–1023 px; collapsed sidebar or drawer, tables may scroll horizontally or transform into summary rows.
- Mobile: below 768 px; single-column forms, full-width primary actions where appropriate, mobile navigation drawer, cards instead of wide tables when easier to use.
- Do not simply shrink desktop layouts. Reconsider action placement, table density, editor navigation, and checkout ergonomics for touch.
- Minimum interactive target around 44 × 44 px where practical.

## 11. Accessibility and content rules

- Aim for WCAG 2.2 AA contrast and keyboard accessibility.
- Visible keyboard focus for every interactive element.
- Semantic headings, labels, button names, and form descriptions.
- Don't use placeholder text as the only form label.
- Provide useful alt text for meaningful images; decorative images should be ignored by assistive technology.
- Keep error messages close to the field they describe and associate them programmatically.
- Use clear language and specific action labels ("Create product", not "Submit").
- Design long-content, empty, error, permission-denied, offline, and success states—not just ideal populated screens.

## 12. Data visualization and commerce UI

- Charts are optional, not the center of every dashboard. Use them only when they answer a real business question.
- Prefer a small number of useful metrics with clear comparison periods and definitions.
- Financial values, order counts, quantities, dates, and percentages should align consistently and use tabular numerals.
- Tables should prioritize scanability: status, order number, customer, date, total, payment status, fulfillment status, and row actions.
- Make payment status, order status, and fulfillment status separate concepts.

## 13. Stitch output expectations

For every requested page or component:

1. Follow this file as the source of truth for colors, typography, spacing, radius, interaction states, motion, themes, and RTL.
2. Create production-quality desktop and mobile layouts, not a single static desktop mockup.
3. Include realistic but fictional content and data. Never use real customer personal information.
4. Include loading, empty, error, disabled, success, and permission-limited states where relevant.
5. Keep reusable components consistent across pages.
6. Use a coherent Lucide-style outline icon family.
7. Make clickable affordances obvious and show the resulting UI state in the design/prototype.
8. Avoid adding features not requested in the prompt. Ask for no backend implementation; the output is a design/prototype handoff.
9. Preserve the separation between the platform dashboard and a merchant's independently themed storefront.
10. Do not invent a final product name or logo. Use the replaceable `CommerceOS` wordmark placeholder.

---

## 14. Design acceptance checklist

- [ ] Dark mode is the initial state and looks intentionally designed.
- [ ] Light mode is complete, not a simple white inversion.
- [ ] English defaults to LTR; Arabic renders correctly in RTL.
- [ ] Montserrat is used for Latin text; Noto Sans Arabic is used for Arabic glyphs.
- [ ] Buttons, forms, tables, dialogs, dropdowns, toasts, and empty states have consistent behavior.
- [ ] All primary pages have responsive mobile layouts.
- [ ] Motion is subtle and reduced-motion aware.
- [ ] Dashboard UI and merchant storefront themes are visually independent.
- [ ] No low-contrast text, ambiguous icons, or color-only status communication.
- [ ] No dashboard screen is overfilled with decorative charts or oversized cards.
