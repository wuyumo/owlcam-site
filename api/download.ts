// GET /download → 302 to the newest DMG on the public releases repo. Every download
// button points here, so shipping a new version needs no site change.
export const config = { runtime: 'edge' };
const FALLBACK = 'https://github.com/wuyumo/owlcam-releases/releases/latest';
export default async function handler(): Promise<Response> {
  try {
    const r = await fetch('https://api.github.com/repos/wuyumo/owlcam-releases/releases/latest',
      { headers: { accept: 'application/vnd.github+json', 'user-agent': 'owlcam-site' }, cf: { cacheTtl: 300 } } as RequestInit);
    if (r.ok) {
      const j = await r.json() as { assets?: { name: string; browser_download_url: string }[] };
      const dmg = j.assets?.find(a => a.name.endsWith('.dmg'));
      if (dmg) return new Response(null, { status: 302, headers: { location: dmg.browser_download_url, 'cache-control': 'no-store' } });
    }
  } catch {}
  return new Response(null, { status: 302, headers: { location: FALLBACK, 'cache-control': 'no-store' } });
}
