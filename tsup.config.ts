import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig((options) => ({
  entry: ["src/components/composed/index.ts"],
  dts: true,
  outDir: "dist",
  name: "aegean-ui",
  splitting: false,
  sourcemap: true,
  clean: true,
  target: tsconfig.compilerOptions.target as "es2016",
  minify: false,
}));
