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
    // webpack(config) {
    //     config.module.rules.push({
    //         test: /\.html$/,
    //         use: "raw-loader", // Prevents HTML files from causing Webpack errors
    //     });
    //     return config;
    // },
};

export default nextConfig;
