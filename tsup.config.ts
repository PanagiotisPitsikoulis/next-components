import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig((options) => ({
  entry: ["src/components/**/*.ts"],
  dts: true,
  outDir: "dist",
  format: ["cjs", "esm"],
  splitting: true,
  clean: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
}));
