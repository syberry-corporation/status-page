/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/monitoring-status-page",
  assetPrefix: "/monitoring-status-page/",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
