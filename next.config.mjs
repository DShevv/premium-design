/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://intapi.webspaceteam.site/api",
    STORE_URL: "https://intapi.webspaceteam.site",
    HOME_URL: "https://webspaceteam.site",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "intapi.webspaceteam.site",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
