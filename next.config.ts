import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {},
};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public", // Ubicación donde se genera el service worker
    register: true, // Registra automáticamente el service worker
    skipWaiting: true, // Fuerza al service worker a activarse inmediatamente
    disable: process.env.NODE_ENV === "development", // Desactiva PWA en desarrollo
  },
});
