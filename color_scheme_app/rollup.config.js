import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import multiInput from 'rollup-plugin-multi-input';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default {
  input: "src/index.ts",
  output: [
    {
      dir: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      dir: pkg.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    multiInput(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
        extensions: ['.css']
    }),
    json()
  ]
};
