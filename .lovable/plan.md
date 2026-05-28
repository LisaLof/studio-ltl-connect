## Plan: Refresh preview for /branding

### Findings
I inspected the Branding route end-to-end and found no code-level defect:

- Route `/branding` is registered in `src/App.tsx` above the catch-all.
- `src/pages/Branding.tsx` compiles cleanly (valid imports, JSX, default export).
- Both image assets exist: `src/assets/branding-era.jpg`, `src/assets/branding-serenzia.jpg`.
- `Header.tsx` accepts `activePage="branding"`.
- Vite dev server is running on port 8080 with no errors in its log.
- No console errors or failed network requests reported from the preview.

This means the source for `/branding` is healthy. The most likely cause of "preview not loading correctly" is a stale Vite HMR / module-graph state in the sandbox — not a code bug.

### Action (preview/build handling only)
Per your constraints (don't modify content, styling, layout, images, navigation, footer, `docs/`, assets, or generated build files), the only safe lever is to restart the Vite dev server so the preview re-mounts with a clean module graph.

1. Restart the Vite dev server in the sandbox (no file changes).
2. Verify the /branding route loads by checking dev-server logs and the preview console/network for errors.
3. If a real error surfaces after the restart (missing module, runtime exception, etc.), report it back with the exact message before changing any code — so we can decide together whether the fix still fits within your "preview/build handling only" scope.

### What this will NOT touch
- No edits to `src/pages/Branding.tsx`, `Header`, `Footer`, or any component.
- No changes in `docs/`, `src/assets/`, `public/`, `index.html`, `vite.config.ts`, `tailwind.config.ts`, or `index.css`.
- No content, copy, spacing, color, or routing changes.
