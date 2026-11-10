# Alloy Smile (React + Vite + Tailwind)
1. Copy your original single-file site to `./original.html`
2. `npm install`
3. `npm run extract`   (fills src/data/*.js and src/styles/legacy.css from original.html)
4. `npm run dev`  /  `npm run build`  (Netlify: build `npm run build`, publish `dist`)

Routes use HashRouter, so existing `#/...` links keep working with no Netlify redirects.
Text goes through `t()` (src/lib/i18n.js + src/data/sw.js) for English/Kiswahili.
Move the portrait from src/data/photo.js into public/images/ when you start adding real media.
