import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const forGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: forGithubPages ? "/Profile/" : "/",
});
