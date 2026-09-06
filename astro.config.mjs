import { defineConfig } from 'astro/config';
// SITE_BASE=/owlcam-site for the GitHub Pages project site; unset ("/") on a custom domain / Vercel.
const base = process.env.SITE_BASE || '/';
export default defineConfig({ site: process.env.SITE_ORIGIN || 'https://owlcam.app', base, trailingSlash: 'never' });
