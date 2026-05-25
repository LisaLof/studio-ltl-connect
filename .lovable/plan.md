## Plan

The console shows `[vite] server connection lost. Polling for restart...` and the Vite ping returns 404. The `vite.config.ts` base path is already correct (`/` in dev, `./` in production), and no source files need changes.

1. **Do not modify** `src/`, routing, components, images, styling, content, or `vite.config.ts`.
2. **Restart the Vite dev server** in the sandbox so the preview reconnects.
3. **Validate** by checking dev-server logs and pinging `/` and `/trend` — both should return 200 and the preview should reconnect on all routes.