# Storely

Multi-tenant store-builder SaaS. Monorepo (pnpm + Turborepo). See `docs/architecture/architecture.md`.

- `apps/` — merchant, marketing, storefront, platform-admin (api/worker added once the backend is chosen)
- `packages/` — shared libraries. **Frontend libs live in `packages/core`** (Nuxt layer all apps extend).
