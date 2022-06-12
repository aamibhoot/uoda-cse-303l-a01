module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HC_KEY: process.env.NEXT_PUBLIC_HC_KEY,
    NEXT_PUBLIC_COOKIE_KEY: process.env.NEXT_PUBLIC_COOKIE_KEY,
  },
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
