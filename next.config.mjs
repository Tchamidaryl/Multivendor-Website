import path from "path"; // Add this import at the top

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: "https",
            hostname: "utfs.io",
        },
        ],
    },
    webpack(config) {
        config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "./"), // Add the alias here
        };
        return config;
    },
};

export default nextConfig;
