# jordyrusso-site — Enhancement Roadmap

Actionable rollout plan. When you say **“roll out Stage N”**, the agent will:
1. List **decisions** for that stage and wait for your answers
2. Implement **only** that stage
3. Leave later stages untouched

---

## How stages depend on each other

```
Stage 0 (Foundation)
    ↓
Stage 1 (Navigation & IA) ──→ Stage 2 (Work showcase)
    ↓                              ↓
Stage 3 (Contact & conversion) ←───┘
    ↓
Stage 4 (Motion & transitions)
    ↓
Stage 5 (Playful interactions)
    ↓
Stage 6 (Polish, SEO, performance)
    ↓
Stage 7 (Optional extras)
```

Stages 1–3 can be done in parallel after Stage 0, but **recommended order** is numeric.

---

## Stage 0 — Foundation ✅

**Goal:** Make future changes safe, fast to preview, and easy to deploy.

**Completed:** 2026-07-01

### Decisions (locked in)
| # | Decision |
|---|----------|
| 0.1 | **Plain HTML/CSS/JS** — no Jekyll/Eleventy |
| 0.2 | **Public repo** — free GitHub Pages |

### Deliverables
- [x] Site folder: `/Users/jordyrusso/Desktop/work/jordyrusso-site`
- [x] Stack documented in README (plain HTML, public repo)
- [x] Local preview documented (python server + Live Preview notes)
- [x] GitHub Pages: public repo, deploying from `main`, status **built**
- [x] Custom domain: https://hijordy.com/ (HTTP 200)
- [x] `.gitignore`, `.vscode/extensions.json` for dev hygiene
- [x] ROADMAP.md added for staged rollouts

### Acceptance criteria
- [x] `git push` deploys to https://hijordy.com
- [x] Local preview documented
- [x] No regressions required (verify after next push)

### Complexity
Low · 1–2 hours

---

## Stage 1 — Navigation & information architecture ✅

**Goal:** Clear paths everywhere; make home taglines real routers; improve Work/Class menus.

**Completed:** 2026-07-01

### Decisions (locked in)
| # | Decision |
|---|----------|
| 1.1 | **`third thing.` →** `about.html` |
| 1.2 | **“Where do I start?”** on home — default copy, dismissible |
| 1.3 | **404** — *“this page left the stage”* + links to `.home` / `.contact` |
| 1.4 | **Nav tooltips** — on-brand micro-copy on hover |

### Deliverables
- [x] Home taglines: `performer.` → performance, `creative.` → creative, `third thing.` → about
- [x] Dismissible home guide (sessionStorage)
- [x] Black slide-down **nav panels** for `.work` and `.class` (hover desktop, tap-to-expand mobile)
- [x] Nav hover tooltips via `data-tooltip`
- [x] Scroll progress bar on About + Creative Sessions
- [x] `404.html` for GitHub Pages
- [x] Creative page link → `.creative_sessions`

### Acceptance criteria
- [x] Every home tagline goes somewhere intentional
- [x] All pages reachable in ≤2 clicks from home
- [x] Mobile nav + panels work
- [x] Branded 404 with escape links

### Complexity
Medium · half day

---

## Stage 2 — Work showcase & content depth ✅

**Goal:** Engage visitors with your actual work, not just UI.

**Completed:** 2026-07-01

### Decisions (locked in)
| # | Decision |
|---|----------|
| 2.1 | **Showreel** — user provides YouTube ID via `js/site-content.js` |
| 2.2 | **Currently / Recently** — skipped |
| 2.3 | **Credits** — performance + creative (from CV, editable in `site-content.js`) |
| 2.4 | **Testimonials** — structure ready; add quotes in `site-content.js` |
| 2.5 | **Open class** — minimal “schedule TBA” block |
| 2.6 | **Press kit** — bio.pdf + cv.pdf on About |

### Deliverables
- [x] **Performance:** showreel embed slot + intro (when YouTube ID set) above existing copy
- [x] **Creative Sessions:** seasons as **collapsible accordions** (Season 1 open by default)
- [x] **Creative Sessions:** thumbnail styling + click-to-play (no iframe until play)
- [x] **Performance / Creative:** credits lists from `js/site-content.js`
- [x] **Creative:** testimonials block (renders when quotes added)
- [x] **Open class:** schedule / location TBA block
- [x] **About:** press kit links (bio + cv PDFs)

### Acceptance criteria
- [x] Creative Sessions page scannable without endless scrolling
- [x] Performance page gives video-first visitors an immediate hook (when showreel ID set)
- [x] All new content is yours (no placeholder lorem)

### Complexity
Medium–high · 1 day (depends on content you supply)

---

## Stage 3 — Contact & conversion

**Goal:** Make it effortless to reach you without bringing back forms.

### Deliverables
- [ ] **Contact page:** three **subject-preset** buttons (not forms) → mailto with pre-filled subject:
  - booking · collaboration · just saying hi
- [ ] Optional: one line near email — *based in sydney · available for tour* (or your wording)
- [ ] **Sticky `.contact` CTA** on long pages (appears after first scroll) — optional
- [ ] **Bookings page:** align tone with contact presets; clear mailto CTA

### Decisions needed from you
| # | Question |
|---|----------|
| 3.1 | Exact **three enquiry types** and mailto subjects |
| 3.2 | **Location / availability** line — include? exact text? |
| 3.3 | **Sticky contact** on Creative Sessions only, or all long pages? |

### Acceptance criteria
- Each preset opens default mail app with correct subject (via existing `email.js` pattern)
- Contact page still works in browsers + doesn’t regress mailto fix

### Complexity
Low · 2–3 hours

---

## Stage 4 — Motion & page personality

**Goal:** Theatre-adjacent feel — paced, not flashy. Includes **Spotlight mode**: a user-controlled blackout with a cursor-driven reveal.

### Deliverables
- [ ] **Spotlight mode toggle** (see detailed spec below)
- [ ] **Page enter transition:** short black or red wipe (~300ms) between routes
- [ ] **Red dash stagger** on list pages (About, Performance, Creative) — `-` appears before text
- [ ] **Home hero:** subtle parallax on scroll (desktop only)
- [ ] **Scroll-triggered copy** on Performance (lines fade in as you scroll) — optional
- [ ] All motion respects **`prefers-reduced-motion`**

### Spotlight mode — spec

**Concept:** A styled on/off toggle (fits site aesthetic: lowercase label, red accent when active). When enabled, a near-black overlay covers the page; content remains technically present but heavily dimmed. A **soft-edged circular spotlight** follows the cursor, revealing the page within a configurable radius — like looking around a dark stage with a follow spot.

**Behaviour**
| Aspect | Detail |
|--------|--------|
| Default state | **Off** — normal browsing |
| Toggle placement | Fixed corner (e.g. bottom-left) or in header — styled to match `.home` / red bar language |
| Overlay | `rgba(0,0,0,0.85–0.95)` or similar; page still “there” but not readable outside the spot |
| Spotlight | Radial gradient “hole” centred on cursor; smooth edge (feathered falloff) |
| Movement | Spotlight tracks cursor on `mousemove`; optional light lag/easing for theatrical feel |
| Links & nav | Still clickable inside the lit area; toggle always reachable |
| Persistence | Optional: remember on/off in `sessionStorage` for the visit |
| Mobile / touch | Drag finger to move spotlight, or auto-disable on touch devices (decision) |
| Reduced motion | If `prefers-reduced-motion: reduce`, hide toggle or force off |
| Performance | Single full-viewport overlay + CSS `mask` / `radial-gradient` or canvas; no per-element duplication |

**Implementation notes (for rollout)**
- Likely approach: fixed `div.spotlight-overlay` with `pointer-events: none` on overlay, `pointer-events: auto` only on interactive children via separate layer — *or* overlay with `mix-blend-mode` / CSS `mask-image` updated via custom properties `--x`, `--y`
- Hide default cursor while active; optional custom crosshair or none
- `z-index` above content, below toggle control
- Must not break: mailto (`email.js`), mobile nav, fixed header
- **Stage 6 custom cursor** (if enabled later) should defer to spotlight while spotlight mode is on

**Thematic fit:** Performer on a dark stage; visitor “lights” what they want to see. Pairs naturally with home hero photography and B&W aesthetic.

### Decisions needed from you
| # | Question |
|---|----------|
| 4.1 | Transition style: **black wipe**, **red line scan**, or **simple fade**? |
| 4.2 | Enable **parallax** on home hero? (yes/no) |
| 4.3 | **Scroll-triggered copy** on Performance — yes/no? |
| 4.4 | **Spotlight toggle label** (e.g. `.spotlight`, `lights up`, `follow spot`) |
| 4.5 | **Toggle placement** — header, bottom-left, bottom-right? |
| 4.6 | **Spotlight radius** — small / medium / large (roughly 120px / 200px / 320px)? |
| 4.7 | **Darkness level** — how black? (subtle dim vs near-pitch-black outside spot) |
| 4.8 | **Which pages?** Site-wide toggle, or home + performance only? |
| 4.9 | **Mobile behaviour** — touch-drag spotlight, simplified dim only, or desktop-only? |
| 4.10 | **Movement feel** — instant tracking vs slight smooth lag? |

### Acceptance criteria
- No animation runs when `prefers-reduced-motion: reduce` (spotlight toggle hidden or inert)
- Spotlight mode toggles on/off without page reload; state obvious (label or red indicator)
- Nav, contact paths, and mailto work while spotlight is on
- First Contentful Paint not noticeably worse on mobile
- Site still feels minimal, not “animation demo”
- No scroll jank from spotlight tracking on long pages (Creative Sessions)

### Complexity
Medium–high · 1 day (spotlight adds ~half day to other Stage 4 items)

---

## Stage 5 — Playful interactions (“runaway element”)

**Goal:** One memorable chase moment; on-brand humour. *(Distinct from Stage 4 **Spotlight mode**, which is a voluntary blackout + cursor reveal — this stage is the playful “runs away from cursor” bit.)*

### Deliverables
- [ ] **One runaway element** (see decisions) — flees cursor, then “gives up” and becomes clickable
- [ ] **Payoff copy** when caught (links to contact or mailto)
- [ ] Desktop-first; **disabled on touch** or much gentler on mobile
- [ ] **`prefers-reduced-motion`:** static, normal link behaviour

### Decisions needed from you
| # | Question |
|---|----------|
| 5.1 | **Which element runs?** (`third thing.` / red dash / “book me” on bookings / other) |
| 5.2 | **Which page(s)?** Home only, or elsewhere too? |
| 5.3 | **Payoff line** when caught (e.g. *“fine. you win. let’s talk.”*) |
| 5.4 | **Chase difficulty** — playful / moderate / barely moves? |
| 5.5 | After caught, **permanent link** or reset on page reload?

### Acceptance criteria
- Never blocks sole path to contact/bookings
- Chase caps after ~3s or 2 near-misses
- Funny once; not annoying on repeat visit (consider `sessionStorage` “already caught” flag — optional)

### Complexity
Medium · half day

---

## Stage 6 — Polish, SEO & performance

**Goal:** Professional finish for sharing, speed, and accessibility.

### Deliverables
- [ ] **Open Graph + Twitter** meta tags per page (image: hero photo)
- [ ] **Favicon** (red bar + jordy mark or simple “j”)
- [ ] **Lazy-load** images and YouTube iframes below fold
- [ ] **Font loading** strategy (reduce FOUT)
- [ ] Optional: **dark mode** via `prefers-color-scheme` (inverted B&W + same red)
- [ ] Optional: **custom red-dot cursor** on desktop only
- [ ] **Keyboard shortcuts** overlay (`?` for help) — optional
- [ ] Lighthouse pass: basic a11y + performance sanity check

### Decisions needed from you
| # | Question |
|---|----------|
| 6.1 | **OG image** — use home hero, portrait, or custom asset? |
| 6.2 | **Dark mode** — yes/no? |
| 6.3 | **Custom cursor** — yes/no? *(Inactive while Stage 4 Spotlight mode is on)* |
| 6.4 | **Keyboard shortcuts** — yes/no? |

### Acceptance criteria
- Link previews look good in iMessage / Slack / Twitter
- Creative Sessions doesn’t load all 13 iframes at once
- Focus states visible on nav and links

### Complexity
Medium · half day

---

## Stage 7 — Optional extras (pick à la carte)

**Goal:** Nice-to-haves after core experience is solid.

### Menu (implement only what you select)
| Item | Notes |
|------|--------|
| **Timeline Creative Sessions** | Horizontal scroll by season |
| **Nav “constellation” breadcrumb** | Red line fill on scroll |
| **Meta descriptions as voice** | Witty snippets + SEO keywords |
| **Season intro videos** | One “trailer” per season |
| **Blog / news** | Needs CMS or manual HTML — higher maintenance |
| **Analytics** | Privacy-friendly (Plausible / simple GA) |

### Decisions needed from you
| # | Question |
|---|----------|
| 7.1 | Which items from the menu above? (list numbers/names) |

### Complexity
Varies per item

---

## Rollout commands (for future chats)

Say any of:
- **“Roll out Stage 0”** … **“Roll out Stage 7”**
- **“Roll out Stage 2 but skip testimonials”**
- **“Roll out Stage 4 spotlight only”** — implement toggle + overlay, skip other Stage 4 items
- **“Roll out Stage 5 only on home”**

The agent will quote **decisions for that stage**, wait for answers, then implement.

---

## Suggested timeline (flexible)

| Week | Stage |
|------|--------|
| 1 | 0 → 1 |
| 2 | 2 (gather your content first) |
| 3 | 3 → 4 |
| 4 | 5 → 6 |
| As wanted | 7 |

---

## Content to gather ahead of Stage 2

Having these ready speeds up implementation:
- Showreel YouTube URL
- 3–5 credit lines (show, role, year)
- “Currently” one-liner
- Open class schedule (if any)
- Testimonial quotes (if any)
- Press photos for kit

---

*Last updated: 2026-07-01 · Spotlight mode added to Stage 4*
