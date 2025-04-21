/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://api.ottorenovation.by/api",
    STORE_URL: "https://api.ottorenovation.by",
    HOME_URL: "https://ottorenovation.by",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.ottorenovation.by",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ottorenovation.by",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
