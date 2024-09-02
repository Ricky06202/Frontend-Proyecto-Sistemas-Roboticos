import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), tailwind()],
  output: "server",
  redirects: {
    "/": "/home",
  },
  adapter: vercel(),
});
