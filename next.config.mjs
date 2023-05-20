// next.config.js

import mdxconfig from '@next/mdx';
import remarkgfm from 'remark-gfm';
import rehypeAttrs from 'rehype-attr';

const withMDX = mdxconfig({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [remarkgfm],
        rehypePlugins: [() => rehypeAttrs({ properties: 'attr' })],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: '@mdx-js/react',
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
