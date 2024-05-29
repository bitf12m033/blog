import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // MDX options here
  },
});

export default withMDX(nextConfig);
