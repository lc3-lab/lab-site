import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import { visit } from 'unist-util-visit';

const siteBase = '/lab-site';

function rehypeBaseAssets() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties?.src?.startsWith('/')) {
        node.properties.src = siteBase + node.properties.src;
      }
      if (node.tagName === 'a' && node.properties?.href?.startsWith('/')) {
        node.properties.href = siteBase + node.properties.href;
      }
    });
  };
}

export default defineConfig({
  site: 'https://lc3-lab.github.io',
  base: siteBase,
  output: 'static',
  markdown: {
    rehypePlugins: [
      rehypeBaseAssets,
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
});
