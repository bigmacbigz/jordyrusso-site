# jordyrusso-site

Static portfolio for [hijordy.com](https://hijordy.com/) — plain HTML, CSS, and JavaScript on GitHub Pages.

## Live site

**https://hijordy.com/**

Also resolves via https://bigmacbigz.github.io/jordyrusso-site/

## Repo

https://github.com/bigmacbigz/jordyrusso-site (public)

## Stack (Stage 0)

| Choice | Decision |
|--------|----------|
| Build | **Plain HTML/CSS/JS** — no Jekyll/Eleventy |
| Hosting | GitHub Pages, deploy from `main` / root |
| Domain | Custom domain via `CNAME` → `hijordy.com` |
| Repo | **Public** (required for free Pages) |

Enhancement plan: see [ROADMAP.md](./ROADMAP.md).

## Local development

Open this folder as your editor workspace root (`jordyrusso-site`, not the parent `work` folder).

### Preview in browser

```bash
cd /Users/jordyrusso/Desktop/work/jordyrusso-site
python3 -m http.server 8080
```

Open http://localhost:8080

### Preview in VS Code / Cursor

1. Install the **Live Preview** extension (recommended in `.vscode/extensions.json`)
2. Open any `.html` file → **Show Preview**
3. **Note:** `mailto:` links and some interactions only work in a real browser, not the embedded preview

## Project structure

```
index.html              Home
about.html              About (+ bio/CV PDFs)
performance.html        Performance
creative.html           Creative
creative-sessions.html  YouTube gallery by season
open-class.html         Open class
bookings.html           Bookings (mailto)
contact.html            Contact (mailto)
css/style.css           Global styles
js/nav.js               Mobile nav + dropdowns
js/email.js             Mailto without blank-tab bug
assets/images/          Photos
assets/docs/            bio.pdf, cv.pdf
CNAME                   Custom domain (hijordy.com)
.github/workflows/      Pages deploy on push
```

## Deploy changes

```bash
git add .
git commit -m "Describe your change"
git pull --no-rebase origin main   # if branch has diverged
git push origin main
```

GitHub Actions deploys automatically (~30–60 seconds). Check **Actions** tab if the site doesn’t update.

## Editing tips

| Change | File |
|--------|------|
| Colours, fonts, layout | `css/style.css` (`:root` variables at top) |
| Page copy | Matching `.html` file |
| Nav (all pages) | Header block in each `.html` file |
| Email links | `mailto:` anchors + `js/email.js` |
| Images | `assets/images/` then update `src` in HTML |

## Pages map

| File | Route |
|------|-------|
| `index.html` | `/` |
| `about.html` | `/about.html` |
| `performance.html` | `/performance.html` |
| `creative.html` | `/creative.html` |
| `creative-sessions.html` | `/creative-sessions.html` |
| `open-class.html` | `/open-class.html` |
| `bookings.html` | `/bookings.html` |
| `contact.html` | `/contact.html` |

Contact and bookings use `mailto:hitherejordy@gmail.com` (opens the visitor’s default mail app).
