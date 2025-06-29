const routes = [
  '/',
  '/about',
  '/about/ourmission',
  '/about/story',
  '/about/community',
  '/about/approach',
  '/about/foodandnutrition',
  '/about/agegroups',
  '/about/staff',
  '/about/parentresources',
  '/fees',
  '/contact',
  '/booking',
  '/ournurseries',
  '/nurseries/rhydlafar',
  '/nurseries/pentyrch',
  '/nurseries/radyr'
];

export const generateSitemap = () => {
  const baseUrl = 'https://littlehavennursery.co.uk';
  const lastmod = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return sitemap;
}; 