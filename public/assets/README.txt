EDITORSYD01 — BRAND ASSETS
==========================

Drop your real files here, then update src/config/site.js.

1) LOGO (your official white cinematic logo)
   - Save it as:  logo.png   (in this folder)
   - Then in src/config/site.js change:
        logo: '/assets/logo.svg'   ->   logo: '/assets/logo.png'
   - The included logo.svg is only a placeholder wordmark. Do NOT
     use it as your final logo — replace it with your PNG.

2) OWNER PHOTO (your photo)
   - Save it as:  owner.jpg   (in this folder)
   - Then in src/config/site.js change:
        ownerPhoto: 'https://images.unsplash.com/...'  ->  ownerPhoto: '/assets/owner.jpg'

3) HERO VIDEO (background showreel on the homepage)
   - Save it as:  hero.mp4
   - Already wired via media.heroVideo in site.js.

4) SHOWREEL VIDEO
   - Save it as:  showreel.mp4
   - Already wired via media.showreelVideo in site.js.

5) PROJECT THUMBNAILS / VIDEOS
   - Edit the `projects` array in src/config/site.js.
   - Each project supports: title, category, year, thumb (image) and video (mp4 URL).

CONTACT / SOCIAL LINKS
   - All configurable in the `contact` object in src/config/site.js
     (email, WhatsApp number, Instagram, Facebook).
