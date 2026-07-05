# Icon Design Partners — Website

## Local Dev
```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Hit Deploy ✦

## Updating Your Email
The email address is set once at the top of `src/App.jsx`:
```js
const EMAIL = 'admin@icondesignpartners.com'
```
Change it there and it updates everywhere automatically.
