import type { NextConfig } from "next";

import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'tsx']
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
