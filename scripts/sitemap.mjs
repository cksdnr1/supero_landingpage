import * as fs from 'fs';
import { globby } from 'globby';

const YOUR_URL = 'https://supero.fit';
const getDate = new Date().toISOString();

async function generateSiteMap() {
    // Send a list of file names to globby for it to read
    // We add an ! before the files we want to be ignored (in this case, the api pages and the dynamically generated pages
    // change the file path to match the files in your own project
    const pages = await globby(['../src/pages/**/*.tsx', '!../src/pages/_*.tsx']);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
              .map((page) => {
                  const path = page
                      .replace('../src/pages/', '')
                      .replace('.tsx', '')
                      .replace(/\/index/g, '');
                  const routePath = path === 'index' ? '' : path;
                  return `
          <url>
            <loc>${YOUR_URL}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
                         `;
              })
              .join('')}
      </urlset>
  `;

    fs.writeFileSync('../public/sitemap.xml', sitemap);
}

generateSiteMap();
