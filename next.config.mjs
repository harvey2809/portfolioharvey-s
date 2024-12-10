/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "photos.fife.usercontent.google.com",
      },
      {
        hostname: "cdn.hashnode.com",
      },
      {
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
