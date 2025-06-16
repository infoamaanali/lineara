import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import tailwindcss from "@tailwindcss/postcss";
import pkg from "./package.json" assert { type: "json" };
import cssnano from "cssnano";

export default [
  // 1. JavaScript + CSS
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        inject: true,
        sourceMap: true,
        plugins: [
          tailwindcss(),
          // autoprefixer(),
          cssnano({
            preset: ["default", { calc: false }],
          }),
        ],
      }),
    ],
  },

  // 2. Types (skip CSS)
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/], // <-- tell Rollup to ignore .css files
  },
];
