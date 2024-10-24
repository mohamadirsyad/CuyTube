/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
        source: "/",
        destination: "/videos",
        permanent: true,
      },
    ],
  },
};

export default nextConfig;
