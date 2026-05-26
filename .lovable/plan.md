## Plan

The sandbox dev server is running correctly:

- Vite v5.4.19 is up on port 8080
- `GET /` returns 200
- `GET /trend` returns 200
- `vite.config.ts` base is already `'/'` in dev and `'./'` in production (correct for both Lovable preview and the `docs/` GitHub Pages build)

No source, config, or build files need to change.

### Steps

1. **No code changes.** Do not touch `src/`, `vite.config.ts`, `docs/`, assets, content, styling, layout, or routing.
2. **Restart the Vite dev server** in the sandbox as a no-op recovery so the preview iframe reconnects cleanly to a fresh HMR socket.
3. **Validate** by re-pinging `/` and `/trend` from the sandbox — both must return 200.

### If the preview iframe still shows "connection lost" after the restart

This is a client-side stale websocket in the preview tab, not a build issue. A hard refresh (Cmd/Ctrl + Shift + R) on the preview reconnects it. The underlying server and routes are confirmed working.
