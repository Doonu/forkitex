import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

import { BuildOptions } from './build.types';

export function buildOptimization(options: BuildOptions): webpack.Configuration['optimization'] {
  return {
    moduleIds: 'deterministic',
    chunkIds: options.isDevelopment ? 'named' : 'deterministic',
    splitChunks: {
      chunks: 'all',
    },
    minimize: !options.isDevelopment,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          keep_fnames: true,
          compress: {
            passes: 2,
          },
        },
      }),
    ],
  };
}
