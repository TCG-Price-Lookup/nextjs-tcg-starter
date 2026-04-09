import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.tcgpricelookup.com",
      },
    ],
  },
};

export default config;
