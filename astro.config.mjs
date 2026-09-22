import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGitHubPages ? "https://brenotheboa.github.io" : undefined,
  base: isGitHubPages ? "/Resume" : "/"
});
