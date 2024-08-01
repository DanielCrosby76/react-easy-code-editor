import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "src/lib/exports.tsx",
      name: "reactEasy",
      fileName: "react-easy-code-editor",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        exports: "named",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/init.ts"],
    coverage: {
      exclude: [
        ...configDefaults.coverage.exclude!,
        "docs/**",
        "examples/**",
        "src/lib/exports.tsx",
        "src/main.tsx",
        "src/lib/themes/**",
      ],
    },
  },
});
