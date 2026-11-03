import { getCollection, type CollectionEntry } from 'astro:content';
export type Post = CollectionEntry<'blog'>;
export const origin = 'https://owlcam.app';
export const blogPath = (lang: string) => `${lang === 'zh' ? '/zh' : ''}/blog`;
export const postPath = (post: Post) => `${blogPath(post.data.lang)}/${post.data.slug}`;
export async function getPosts(lang?: string) {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  return (await getCollection('blog', ({data}) => !data.draft && data.published <= today && (!lang || data.lang === lang)))
    .sort((a, b) => b.data.published.localeCompare(a.data.published) || a.data.slug.localeCompare(b.data.slug));
}
export const categoryLabel = (category: string, lang: string) => ({
  setup: ['开始使用', 'Setup'], detection: ['检测与录像', 'Detection'], privacy: ['隐私', 'Privacy'],
  storage: ['存储与备份', 'Storage'], workflow: ['回看与管理', 'Workflow'], discussion: ['社区话题', 'Community topics'],
}[category]?.[lang === 'zh' ? 0 : 1] || category);
