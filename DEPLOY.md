# Deploying Editorsyd01 to Cloudflare Pages

Ye site ek Vite + React app hai. Cloudflare Pages pe live karne ke 2 tarike hain.
Dono me se koi ek chuno.

---

## Build settings (dono tariko me same)

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | `Vite`          |
| Build command          | `npm run build` |
| Build output directory | `dist`          |
| Node version           | `20`            |

Ye files already set hain, tumhe kuch change nahi karna:
- `public/_redirects`  -> saare routes (/work, /about ...) refresh pe kaam karenge (no 404)
- `public/_headers`    -> caching + security headers
- `wrangler.toml`      -> output dir = dist
- `.nvmrc`             -> Node 20

---

## Option A — GitHub se auto-deploy (RECOMMENDED)

Har baar code push karo, Cloudflare khud build karke live kar dega.

1. Is folder ko ek GitHub repo me push karo:
   ```bash
   git init
   git add .
   git commit -m "Editorsyd01 cinematic site"
   git branch -M main
   git remote add origin https://github.com/<tumhara-username>/editorsyd01.git
   git push -u origin main
   ```
2. https://dash.cloudflare.com  ->  Workers & Pages  ->  Create  ->  Pages  ->  "Connect to Git"
3. Apna repo select karo.
4. Build settings (upar wali table) fill karo:
   - Build command: `npm run build`
   - Output directory: `dist`
5. "Save and Deploy" dabao. 2-3 min me live URL mil jayega:
   `https://editorsyd01-cinematic.pages.dev`

Aage se jab bhi `git push` karoge, site auto-update ho jayegi.

---

## Option B — Bina GitHub, seedha upload (Wrangler CLI)

1. Ek baar Wrangler install karo:
   ```bash
   npm install -D wrangler
   ```
2. Cloudflare login:
   ```bash
   npx wrangler login
   ```
   (browser me login window khulega — allow kar dena)
3. Deploy:
   ```bash
   npm run deploy
   ```
   Ye pehle build karega, phir `dist` folder ko Cloudflare pe upload karega.
   Pehli baar project name pooch sakta hai — `editorsyd01-cinematic` rakhna.

Live URL terminal me print ho jayega.

---

## Custom domain (optional)
Cloudflare Pages -> tumhara project -> "Custom domains" -> apna domain add karo
(jaise editorsyd01.com). DNS auto set ho jayega agar domain Cloudflare pe hai.

---

## Note
- Hero video (`src/Images/hero_section.mp4`) aur images build me bundle ho jati hain,
  alag se upload karne ki zaroorat nahi.
- Contact form WhatsApp/Email pe data bhejta hai (koi server nahi chahiye), to
  Cloudflare pe bilkul waise hi chalega jaise local pe.
