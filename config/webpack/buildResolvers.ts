import path from 'path';

import { ResolveOptions } from 'webpack';

import { BuildOptions } from './build.types';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, 'node_modules'],
    alias: {
      '@app': path.resolve('src/app'),
      '@processes': path.resolve('src/processes'),
      '@pages': path.resolve('src/pages'),
      '@widgets': path.resolve('src/widgets'),
      '@features': path.resolve('src/features'),
      '@entities': path.resolve('src/entities'),
      '@shared': path.resolve('src/shared'),
    },
  };
}
