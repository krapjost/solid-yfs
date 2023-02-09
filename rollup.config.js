import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './src/index.ts',
  output: {
    format: 'es',
    file: './dist/index.js'
  },
  external: ['solid-js'],
  plugins: [
    typescript({
      compilerOptions: {
        outDir: "dist",
        declaration: true,
        emitDeclarationOnly: true,
        declarationDir: "./types"
      },
    }),
    nodeResolve()]
};
