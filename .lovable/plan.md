## Summary
Replace specific text sections in `src/pages/Branding.tsx` while preserving all HTML structure, styling, spacing, layout, and other pages.

## Changes

### 1. Vad som ingår — bullet list
- Remove hyphen from `sociala medier-mallar` → `sociala medier mallar`

### 2. Leverans och villkor — text update
- Add new price line: `Pris: 14 000 kr exkl. moms (17 500 kr inkl. moms)` within the existing `<p>`/`<br />` structure
- Replace `60 procent` → `60%`
- Replace `40 procent` → `40%`
- Keep the same 3-paragraph container structure and `space-y-4` spacing class

## What will NOT change
- HTML element structure (same `<p>`, `<br />`, `<ul>`, `<ol>`, `<li>` tags)
- Any Tailwind classes (`space-y-2`, `space-y-4`, `mb-6`, `leading-relaxed`, etc.)
- Images, image alt texts, image sizes
- Typography family, font sizes, colors
- Buttons, navigation, footer
- Layout, responsive behavior
- Other pages
- Hero heading "Branding Bas"
- Section headings ("Vad som ingår", "Process", "Leverans och villkor")
- CTA button text "Beställ via kontakt"

## File to edit
- `src/pages/Branding.tsx` (two targeted line replacements, no full rewrite)