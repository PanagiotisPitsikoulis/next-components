import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig((options) => ({
  entry: ["src/components/composed/index.ts"],
  dts: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  name: "tsup-tutorial",
  splitting: false,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  sourcemap: true,
  clean: true,
  target: tsconfig.compilerOptions.target as "es2016",
  minify: false,
}));
