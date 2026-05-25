## Plan

1. **Constrain the change to Vite configuration only**
   - Do not edit `src/`, page components, routing definitions, images, styling, text, or navigation.
   - Keep existing React Router routes exactly as they are, including `/trend`.

2. **Fix base path handling for preview and production separately**
   - Keep development/Lovable preview on absolute root base: `/`.
   - Keep production/static export on relative base: `./`, so the existing `docs/` deployment behavior is preserved.
   - Make the condition explicit and robust in `vite.config.ts` so `/trend`, `/branding`, `/om-studio-ltl`, and `/tjanster` all resolve Vite assets from the preview root instead of relative route paths.

3. **Clean up Vite config formatting only if needed**
   - Preserve the same plugins, dev server port, aliases, and `docs` build output.
   - Avoid any unrelated config changes.

4. **Restart and validate the preview server**
   - Restart Vite so the updated base path is picked up.
   - Check server logs and verify the relevant signal: the preview should serve the app with no Vite base/asset errors when opening `/trend`.