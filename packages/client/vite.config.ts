import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tsConfigPaths from "vite-tsconfig-paths";
import * as path from "path";

type ViteConfigInput = {
  mode: string;
  command: string;
};

export default (args: ViteConfigInput) => {
  return defineConfig({
    build: {
      outDir: "build",
    },
    plugins: [eslint({ fix: true }), react(), tsConfigPaths()],
    resolve: {
      alias: { src: path.resolve("src/") },
    },
    css: {
      modules: {
        localsConvention: "dashes",
        generateScopedName:
          args.mode === "production"
            ? "[hash:base64:2]"
            : "[local]_[hash:base64:2]",
      },
    },
  });
};
