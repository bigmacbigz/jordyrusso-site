# jordyrusso-site

Static portfolio site for GitHub Pages — migrated from Wix.

## Local preview

```bash
cd jordyrusso-site
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy to GitHub Pages

1. Create a repo named `jordyrusso.github.io` (or any repo with Pages enabled).
2. Push this folder's contents to the `main` branch.
3. In repo **Settings → Pages**, set source to **Deploy from branch** → `main` → `/ (root)`.

For a project repo (e.g. `my-site`), set `base` paths or use a `docs/` folder — these pages use root-relative links.

## Pages

| File | Route |
|------|-------|
| `index.html` | Home |
| `about.html` | About (+ bio/CV PDFs) |
| `performance.html` | Performance |
| `creative.html` | Creative |
| `creative-sessions.html` | Creative Sessions (YouTube) |
| `open-class.html` | Open class |
| `bookings.html` | Bookings (mailto) |
| `contact.html` | Contact (mailto) |

No forms or shop — contact and bookings use `mailto:hitherejordy@gmail.com`.
