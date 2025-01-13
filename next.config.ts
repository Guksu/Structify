import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/funnel/info",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
