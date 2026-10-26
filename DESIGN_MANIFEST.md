# BRAND DESIGN MANIFEST & SYSTEM ARCHITECTURE
> Single Source of Truth for Design Tokens, Typography, Layout Rules & Agent Directives.

---

## 1. AGENT OPERATING DIRECTIVES (STRICT GUARDRAILS)
- **Zero Destructive Refactoring:** Never modify, delete, or rewrite existing working components/sections unless explicitly instructed by the user.
- **Strict Brand Adherence:** All upcoming features, components, and pages must strictly query this manifest for colors, fonts, spacing, and interaction patterns.
- **No Hallucinated Accents:** Never introduce arbitrary colors (greens, purples, neon yellows, etc.). The brand palette is closed.

---

## 2. COLOR TOKEN SYSTEM

| Token Name | Hex Code | Role & Usage Rules |
| :--- | :--- | :--- |
| **Canvas Primary** | `#EAE6DE` | Warm Alabaster / Sandstone Cream. Mandatory background for all primary pages and viewports. |
| **Text Primary** | `#121214` | Deep Obsidian / Charcoal. Primary typography, high-contrast headings, body copy. |
| **Primary Action (Brand Anchor)** | `#226192` | Steel Marine Blue. Primary CTA buttons ("LET'S TALK", "Work With Me →"), active badges, authoritativeness. |
| **Editorial Accent (Punchline)** | `#EF8557` | Warm Terracotta / Burnt Tangerine. Reserved strictly for Butler serif italic punchlines, growth trendlines, star ratings, and key metric callouts. |
| **Surface Secondary** | `#FFFFFF` | Crisp White. Floating cards, input fields, pill badges, and elevated containers over `#EAE6DE`. |
| **Hairline Dividers** | `rgba(18, 18, 20, 0.08)` | Subtle border lines for cards, tables, and section separators on cream canvas. |

### Retired / Deprecated Palette:
- ❌ **`#CDF225` (Electric Lime):** Permanently deprecated. Do not use.
- ❌ **`#6B9C00` / `#84D400` (Olive/Grass Greens):** Permanently deprecated.
- ❌ **Pure Black (`#000000`) Canvas:** Replaced by `#EAE6DE`.

---

## 3. TYPOGRAPHY MATRIX

### A. Display & Punchline Font: `Butler`
- **Category:** High-contrast editorial luxury serif.
- **Primary Roles:**
  - Headline punchlines & italic statement words (e.g., *Growth Strategies.*, *Real Execution.*).
  - Editorial quotes, manifesto callouts, and luxury numerals.
  - Pair with `#EF8557` (Terracotta) for signature visual hooks.

### B. Structural & Interface Font: `Mont`
- **Category:** Clean geometric sans-serif.
- **Primary Roles:**
  - Base headlines (regular/black weights) e.g., "Turning Business Problems Into".
  - Body paragraphs, subheadings, and narrative copy.
  - Navigation links, button labels, uppercase kicker tags, and tabular data.

---

## 4. COMPONENT ARCHITECTURAL TOKENS

### A. Floating Navigation Capsule
- Base container: Floating pill with high-contrast obsidian or ivory glass surface.
- Trigger states: Clean hover dropdowns (no 01/02 numbering, no extraneous arrow badges).
- CTA button: `#226192` with white uppercase text and micro hover-scale transition.

### B. Interactive Cards & Bento Surfaces
- Surfaces: Solid White (`#FFFFFF`) or frosted glass (`bg-white/80 backdrop-blur-md`).
- Borders: `1px solid rgba(18, 18, 20, 0.08)`.
- Shadows: Soft architectural elevation (`box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04)`).

### C. Buttons & Micro-Actions
- **Primary Action:** Solid `#226192` background, white bold text, pill radius (`rounded-full`), hover brightness/shadow lift.
- **Secondary Action:** Crisp white surface (`#FFFFFF`), dark text (`#121214`), subtle border `rgba(18, 18, 20, 0.12)`.
- **Text Link:** `#121214` hover with transition to `#EF8557`.

---

## 5. REVENUE & DATA VISUALIZATION SPEC
- **Positive Trendlines & Growth Graphs:** Rendered in `#EF8557` (Terracotta) with soft underglow.
- **Benchmark / Comparison Bars:** 
  - Status Quo / Industry Average: Muted dark grey (`rgba(18, 18, 20, 0.25)`).
  - Engineered Benchmark: Gradient `#226192` to `#EF8557`.
