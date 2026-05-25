## Problem

The preview isn't loading. The dev server is running fine (Vite v5.4.19 ready on port 8080, no errors), so this is a configuration issue, not a source code issue.

Looking at `vite.config.ts`:

```ts
base: "./",
build: { outDir: 'docs' },
```

The `base: "./"` setting was added to make the production build work as a static site under `docs/` (for GitHub Pages). However, relative base URLs break the Lovable dev preview, which serves the SPA from an iframe URL where client-side routes (`/om-studio-ltl`, `/trend`, etc.) need assets resolved from the site root, not relative to the current path. With `"./"`, asset and HMR URLs resolve incorrectly when the route isn't `/`, causing the preview to fail to load scripts.

## Fix

Update `vite.config.ts` to use an absolute base in dev and only the relative base for production builds:

```ts
base: mode === 'production' ? './' : '/',
```

This preserves the GitHub Pages build behavior (`docs/` output keeps relative asset paths) while restoring the standard `/` base in dev so the Lovable preview can load.

## Scope

- Edit only `vite.config.ts`
- No changes to `src/`, `docs/`, `index.html`, routing, styling, content, or assets
- Restart the dev server after the config change so Vite picks up the new base