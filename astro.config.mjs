import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://brenotheboa.github.io",
  base: process.env.BASE_PATH || "/"
});
