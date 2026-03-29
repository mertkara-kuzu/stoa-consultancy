# STOA Consultancy — Astro + Decap CMS + Cloudflare Pages

Premium bilingual (Italian/Turkish) consultancy website for the Italy–Turkey corridor.

## Stack

- **Astro 4** — Static site generator
- **Decap CMS** — Git-based headless CMS (admin at `/admin/`)
- **Cloudflare Pages** — Hosting & CDN
- **i18n** — Full Italian + Turkish translations with locale-prefixed routes (`/it/`, `/tr/`)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Deploying to Cloudflare Pages

### Option A: Dashboard (easiest)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
3. Connect your GitHub repo
4. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy

### Option B: Wrangler CLI

```bash
# Install wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

## Setting Up Decap CMS

Decap CMS uses Git Gateway to commit content changes directly to your repo.

### With Cloudflare Pages + GitHub:

1. **Enable Git Gateway** — you need an authentication service. The easiest option:
   - Use [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) even when hosting on Cloudflare
   - OR use a self-hosted [Gotrue](https://github.com/netlify/gotrue) instance
   - OR switch backend to `github` in `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: your-username/stoa-consultancy
  branch: main
```

2. **Access the CMS** at `https://yourdomain.com/admin/`

3. **Content you can edit from the CMS**:
   - Hero section (titles, descriptions, CTAs)
   - Services (add/edit/reorder service cards)
   - Stats bar (key numbers)
   - About section (description, quote, features)
   - Client profiles (Italian & Turkish client segments)
   - Blog articles (with i18n support)
   - Site settings (contact info, social links)

## Project Structure

```
stoa-consultancy/
├── astro.config.mjs          # Astro configuration
├── wrangler.toml              # Cloudflare Pages config
├── package.json
├── public/
│   ├── admin/
│   │   ├── index.html         # Decap CMS entry
│   │   └── config.yml         # CMS collection schemas
│   ├── _redirects             # / → /it/
│   └── _headers               # Security headers
├── src/
│   ├── i18n/
│   │   ├── index.ts           # i18n utilities
│   │   ├── it.json            # Italian translations
│   │   └── tr.json            # Turkish translations
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML layout
│   ├── components/
│   │   ├── Nav.astro          # Navigation + language switcher
│   │   ├── Hero.astro         # Hero section
│   │   ├── StatsBar.astro     # Key numbers bar
│   │   ├── Services.astro     # 6 service cards
│   │   ├── About.astro        # About + quote + features
│   │   ├── Clients.astro      # Italian/Turkish client segments
│   │   ├── Contact.astro      # Contact form + info
│   │   └── Footer.astro       # Footer
│   ├── content/               # CMS-managed content
│   │   ├── settings/
│   │   ├── stats/
│   │   └── blog/
│   ├── pages/
│   │   ├── index.astro        # Redirect to /it/
│   │   ├── it/index.astro     # Italian homepage
│   │   └── tr/index.astro     # Turkish homepage
│   └── styles/
│       └── global.css         # Premium dark theme
```

## Customisation

### Change contact details
Edit `src/content/settings/general.json` or use the CMS admin panel.

### Add new services
Either edit `src/i18n/it.json` and `src/i18n/tr.json` directly, or add via CMS at `/admin/`.

### Custom domain
In Cloudflare Pages dashboard → Custom domains → Add `stoaconsultancy.com`.

### Add blog pages
Create `src/pages/it/blog/` and `src/pages/tr/blog/` directories with Astro pages that read from `src/content/blog/`.

## Design

- **Theme**: Premium dark (#09090f) with gold accents (#c9a24e)
- **Fonts**: Playfair Display (serif headings) + Inter (sans body)
- **Animations**: Scroll-reveal, glassmorphism nav, CSS transitions
- **Responsive**: Full mobile support down to 320px
