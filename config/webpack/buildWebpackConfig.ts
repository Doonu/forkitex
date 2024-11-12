import webpack from 'webpack';

import { BuildOptions } from './build.types';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildOptimization } from './buildOptimization';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDevelopment } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'static/js/[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDevelopment ? 'eval' : 'source-map',
    devServer: buildDevServer(options),
    optimization: buildOptimization(options),
    performance: {
      hints: false,
    },
    cache: {
      type: 'filesystem',
    },
  };
}
