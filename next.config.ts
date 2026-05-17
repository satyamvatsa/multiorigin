import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import { resolve } from 'path';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  turbopack: {
    root: resolve(__dirname),
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
