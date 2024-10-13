/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "photos.fife.usercontent.google.com",

            },
            {
                hostname: 'cdn.hashnode.com'
            }
        ]
    }
};

export default nextConfig;
