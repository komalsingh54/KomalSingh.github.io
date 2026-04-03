

## Connect Custom Domain: resume.komal-singh.com

You have two options for connecting your domain:

### Option A: Connect via Lovable (Recommended — simplest)

1. Click **Publish** (top right) to publish your project
2. In the publish dialog, click **Add custom domain**
3. Enter `resume.komal-singh.com`
4. Lovable will show you DNS records to add at your domain registrar
5. At your DNS provider (wherever you manage `komal-singh.com`), add:
   - **A Record**: Name: `resume` → Value: `185.158.133.1`
   - **TXT Record**: Name: `_lovable` → Value: (provided by Lovable)
6. SSL is auto-provisioned once DNS propagates (up to 72 hours)

### Option B: GitHub Pages with custom domain

If you prefer GitHub Pages deployment:

1. The GitHub Actions workflow is already set up — push to `main` triggers deployment
2. In your GitHub repo → **Settings → Pages** → set Source to **"GitHub Actions"**
3. Under **Custom domain**, enter `resume.komal-singh.com`
4. At your DNS provider, add a **CNAME record**: Name: `resume` → Value: `komalsingh54.github.io`
5. Update `vite.config.ts`: change `base` from `"/portfolio/"` to `"/"`
6. Update `package.json`: change `homepage` to `"https://resume.komal-singh.com"`
7. Create a `public/CNAME` file containing `resume.komal-singh.com`

### Files to edit (Option B only)

| File | Change |
|------|--------|
| `vite.config.ts` | Set `base: "/"` for custom domain |
| `package.json` | Update `homepage` URL |
| `public/CNAME` (new) | Add domain name for GitHub Pages |

### Recommendation

**Option A (Lovable)** is zero-config — just add one DNS record and you're live. Option B requires code changes and GitHub repo setup. Which would you prefer?

