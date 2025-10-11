const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, 'ASSETS'),
    };

    config.module.rules.push({
      test: /\.(mp4|mov|avi|wmv|flv|webm|mkv|m4v)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
