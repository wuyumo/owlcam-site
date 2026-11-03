import { getPosts, postPath, origin } from '../lib/blog';
import { xml } from '../lib/xml';
export async function GET() {
 const fixed = ['/', '/zh', '/faq', '/zh/faq', '/privacy', '/zh/privacy', '/blog', '/zh/blog', '/blog/editorial', '/zh/blog/editorial'];
 const posts = await getPosts();
 const urls = [...fixed.map(path=>({path,lastmod:''})),...posts.map(p=>({path:postPath(p),lastmod:p.data.updated || p.data.published}))];
 const body = urls.map(({path,lastmod})=>`<url><loc>${xml(origin+path)}</loc>${lastmod?`<lastmod>${lastmod}</lastmod>`:''}</url>`).join('');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
