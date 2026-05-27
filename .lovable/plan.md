## Plan: Update /tjanster page

Rebuild `src/pages/Tjanster.tsx` only — mirroring the Trend page UX (intro → preview cards → large detailed sections). No global styling, navigation, footer, button, layout, or docs/ changes.

### 1. Copy uploaded images to `src/assets/`
- `user-uploads://ProduktbildVisuellRiktningLight.jpg` → `src/assets/tjanster-card-positionsanalys.jpg`
- `user-uploads://ProduktbildVisuellStrategiSession.jpg` → `src/assets/tjanster-card-strategi-session.jpg`
- `user-uploads://HeroVisuellStrategiSession.jpg` → `src/assets/tjanster-hero-positionsanalys.jpg`
- `user-uploads://HeroVisuellVisuellStrategiSession.jpg` → `src/assets/tjanster-hero-strategi-session.jpg`

(Hero naming follows the user's spec: positionsanalys uses HeroVisuellStrategiSession; strategi-session uses HeroVisuellVisuellStrategiSession.)

### 2. Rewrite `src/pages/Tjanster.tsx`
Reuse the exact classes/spacing/animation patterns from `Trend.tsx`:

- `document.title` → `"Tjänster | Studio LTL"`, meta description updated to intro line.
- Hero section (`px-6 md:px-12 pt-16 pb-12 animate-fade-in`):
  - H1: **Tjänster**
  - Intro paragraphs (verbatim, 3 paragraphs).
- Preview-card grid (same classes as Trend cards, `grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl`, with only 2 cards):
  - Card 1 → image `tjanster-card-positionsanalys`, label "Visuell positionsanalys", scrolls to `#visuell-positionsanalys`. Alt-text omits "bild på".
  - Card 2 → image `tjanster-card-strategi-session`, label "Visuell strategi-session", scrolls to `#visuell-strategi-session`. Alt-text omits "bild på".
- Section 1 `id="visuell-positionsanalys"` (same `px-6 md:px-12 py-16 scroll-mt-8` wrapper):
  - H2 "Visuell positionsanalys"
  - Hero image `tjanster-hero-positionsanalys` (same `w-full max-w-3xl rounded-lg animate-fade-in`)
  - Body text verbatim (intro paragraphs, "Analysen omfattar" list, "Leverans" list, "Resultat" intro + list, "Pris" block).
  - Button (same classes as Trend's contact button) → label **"Resultat via kontakt"** → links to `/om-studio-ltl`.
- Section 2 `id="visuell-strategi-session"` (same wrapper):
  - H2 "Visuell strategi-session"
  - Hero image `tjanster-hero-strategi-session`
  - Body text verbatim ("Vi tittar på" list, "Efter sessionen får ni" list, closing line, "Effekt" block, "Pris" block).
  - Button **"Resultat via kontakt"** → `/om-studio-ltl`.

### Scope guarantees
- No edits to `Header`, `Footer`, `Trend`, other pages, global CSS, Tailwind config, vite config, docs/, or generated assets.
- All typography, color, spacing, button, and card classes copied verbatim from existing Trend implementation — no new tokens.
