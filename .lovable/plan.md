

## Portfolio Upgrade Plan — Branding, SEO, Content & Design

This is a comprehensive improvement based on the feedback. The changes focus on positioning, content strategy, SEO, and visual hierarchy.

---

### 1. Sharpen Personal Brand & Hero Messaging

**Hero section (`Hero.tsx`):**
- Change primary title positioning from rotating generic roles to a **fixed, sharp title**: "Solution Architect" (the anchor identity)
- Add a **specialisation tagline** below the name: `Salesforce Commerce · Frontend Architecture · Retail Platforms · Agentic AI`
- Rewrite bio to answer "why hire Komal" in 5 seconds: lead with the **SFCC niche** and AI-driven retail, not generic "scalable enterprise solutions"
- Replace the rotating role carousel with a more intentional **two-line value proposition**
- Use the empty left space on desktop by shifting to a **split layout** (tagline/bio left, name right) or adding a vertical accent label

**Navbar (`Navbar.tsx`):**
- Replace text abbreviations "in" / "gh" with proper **Lucide `Linkedin` and `Github` icons** with tooltips

---

### 2. Reframe Projects as Case Studies

**Projects section (`Projects.tsx`):**
- Restructure each card from "I built X with Y" to **Problem → Decision → Impact** format
- Add a `challenge` and `impact` field to each project object
- Add a "Salesforce" filter category
- Example rewrite for Asda: Challenge: "Legacy auth across 600+ stores" → Decision: "Azure AD B2C with micro-frontend architecture" → Impact: "40% faster release cycles"

---

### 3. Add "How I Work" / Approach Section

**New component (`Approach.tsx`):**
- A short section between About and Projects explaining methodology
- 3-4 cards: "Discover & Assess" → "Architect & Design" → "Build & Deliver" → "Observe & Optimise"
- Differentiates from pure developers — shows architectural thinking

---

### 4. SEO & Meta Fixes

**`index.html`:**
- Update `<title>` to: "Komal Singh | Solution Architect · Salesforce Commerce & Frontend"
- Update `<meta description>` to include "Salesforce B2C Commerce", "Agentforce", "frontend architecture", "retail platforms"
- Add "Salesforce", "B2C Commerce", "Agentforce", "SFCC" to keywords
- Make title and hero consistent (currently title says "Full Stack Developer" but hero rotates through different roles)
- Update structured data `jobTitle` and `knowsAbout` to include Salesforce specialisms

---

### 5. Elevate Salesforce & Certifications

**Resume section (`Resume.tsx`):**
- Add a **dedicated "Salesforce" skills category** (currently buried in AI section): SFCC, B2C Commerce, Agentforce, Commerce Cloud Developer
- Make certifications more prominent — add badge-style visual treatment with verification status indicators
- Move Salesforce certs to the top of the list (they're the rarest and most valuable differentiator)

**About section (`About.tsx`):**
- Add a Salesforce highlight card to the grid (currently missing entirely)
- Update bio to mention Salesforce Commerce Cloud expertise explicitly

---

### 6. Update Hero Stats

- Change "5+" certifications to "7+" (matching Resume section)
- Update "10+" years to "11+" for accuracy

---

### Summary of files to edit

| File | Changes |
|------|---------|
| `Hero.tsx` | Sharpen title, add specialisation tagline, rewrite bio, fix stats, remove role rotator |
| `Navbar.tsx` | Replace "in"/"gh" text with proper LinkedIn/GitHub icons |
| `Projects.tsx` | Add Problem→Decision→Impact structure, add Salesforce category |
| `Resume.tsx` | Add Salesforce skills category, reorder certs, enhance cert visuals |
| `About.tsx` | Add Salesforce highlight card, update bio |
| `index.html` | Fix title, meta description, keywords, structured data for SEO consistency |
| `Approach.tsx` (new) | "How I Work" methodology section |
| `Index.tsx` | Add Approach component between About and Projects |

