import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig((options) => ({
  entry: [
    "src/default/**/*.(ts|tsx)",
    "src/lib/**/*.(ts|tsx)",
    "src/new-york/**/*.(ts|tsx)",
    "src/mode-toggle/**/*.(ts|tsx)",
  ],
  dts: true,
  outDir: "components",
  format: ["esm"],
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  minify: true,
  bundle: true,
}));
