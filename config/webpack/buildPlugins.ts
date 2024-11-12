import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './build.types';

export function buildPlugins({
  paths,
  local,
  isDevelopment,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const envFile = isDevelopment ? 'production' : 'development';
  const envFilePath = local ? './.env.development.local' : `./.env.${envFile}`;
  const env = dotenv.config({ path: envFilePath }).parsed || {};

  const envKeys = Object.keys(env).reduce(
    (prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    },
    {} as { [key: string]: string }
  );

  const plugins = [
    new webpack.ids.DeterministicChunkIdsPlugin({
      maxLength: 5,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/*.html'],
          },
        },
      ],
    }),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
    new webpack.DefinePlugin(envKeys),
  ];

  if (local) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}
