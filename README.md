# AFWrites

One-page marketing site for **AFWrites**, a boutique iGaming content studio.

Stack: Vite + React + TypeScript + Tailwind CSS + Lucide icons. Single route, no backend, fully static — deploys to Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Deploy (Cloudflare Pages)

- **Build command:** `npm run build`
- **Output directory:** `dist`

## Things to update before launch

All editable placeholders live at the top of [`src/content.ts`](src/content.ts):

| What | Where | Current value |
| --- | --- | --- |
| Google Drive portfolio link | `PORTFOLIO_URL` | Live Drive folder. |
| Founder photo | `founderPhoto` | `null` → shows "Add photo" box. Drop an image in `src/assets/` and import it. |
| Testimonials | `TESTIMONIALS` | Three real client quotes. Edit or add entries here. |
| Email / phone | `CONTACT_EMAIL`, `CONTACT_PHONE` | Already filled in. |
