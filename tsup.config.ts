import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig((options) => ({
  entry: [
    "src/registry/default/ui/**/*.(ts|tsx)",
    "src/registry/new-york/ui/**/*.(ts|tsx)",
  ],
  dts: true,
  outDir: "components",
  format: ["cjs", "esm"],
  splitting: true,
  clean: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
}));
