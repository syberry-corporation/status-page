/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/status-page",
  assetPrefix: "/status-page/",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
