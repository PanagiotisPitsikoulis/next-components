import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig((options) => ({
  entry: ["src/components/**/*.(ts|tsx)"],
  dts: true,
  outDir: "components",
  format: ["cjs", "esm"],
  splitting: true,
  clean: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
}));
