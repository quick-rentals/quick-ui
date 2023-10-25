// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
          },
          {
            file: 'dist/index.esm.js',
            format: 'esm',
          },
      ],
    plugins: [resolve(), commonjs(), terser(),  scss(), typescript({
        tsconfig: 'tsconfig.json', // Path to your tsconfig.json file
      }),],
  },
];
