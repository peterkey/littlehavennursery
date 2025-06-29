import { generateSitemap } from '../src/utils/sitemapGenerator';

// Add this route before the catch-all route
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(generateSitemap());
}); 