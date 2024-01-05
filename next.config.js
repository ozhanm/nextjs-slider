/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_URL,
    trailingSlash: false,
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ozhanmengucek.com',
            },
        ],
        deviceSizes: [500, 768, 992, 1200, 1920],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig