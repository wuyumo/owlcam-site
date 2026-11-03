import { getPosts, postPath, origin, blogPath } from './blog';
import { xml } from './xml';
export async function rss(lang: 'en'|'zh') {
 const posts = await getPosts(lang);
 const title = lang === 'zh' ? 'Owl Cam 博客' : 'Owl Cam Blog';
 const items = posts.map(p=>`<item><title>${xml(p.data.title)}</title><link>${xml(origin+postPath(p))}</link><guid>${xml(origin+postPath(p))}</guid><description>${xml(p.data.description)}</description><pubDate>${new Date(p.data.published+'T09:00:00+08:00').toUTCString()}</pubDate></item>`).join('');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${title}</title><link>${origin+blogPath(lang)}</link><description>${title}</description><language>${lang==='zh'?'zh-CN':'en'}</language>${items}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
}
