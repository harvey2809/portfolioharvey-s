/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:"photos.fife.usercontent.google.com"
            }
        ]
    }
};

export default nextConfig;
