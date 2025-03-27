/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://intapi.webspaceteam.site/api",
    STORE_URL: "https://intapi.webspaceteam.site",
    HOME_URL: "http://localhost:3000",
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
