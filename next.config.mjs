import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  // Add ESLint configuration here
  eslint: {
    // Disables ESLint checks during the production build
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(withMDX(nextConfig));
