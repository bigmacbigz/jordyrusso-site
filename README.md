# jordyrusso-site

Static portfolio site for GitHub Pages — migrated from Wix.

## Local preview

```bash
cd jordyrusso-site
python3 -m http.server 8080
```

Open http://localhost:8080

## Live site

https://bigmacbigz.github.io/jordyrusso-site/

(GitHub Pages may take a minute or two to build after the first push.)

## Repo

https://github.com/bigmacbigz/jordyrusso-site

Pages is configured to deploy from the `main` branch, root `/`.

To use a custom domain later (e.g. `jordyrusso.com`), add it under **Settings → Pages**. To serve from `https://bigmacbigz.github.io` with no path suffix, rename the repo to `bigmacbigz.github.io`.

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
