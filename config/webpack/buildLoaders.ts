import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './build.types';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        cacheDirectory: true,
      },
    },
  };

  const fontLoader = {
    test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
    type: 'asset/resource',
    generator: {
      filename: 'static/fonts/[name].[contenthash].[ext]',
    },
  };

  const fileLoader = {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {},
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: !!options.local,
      },
    },
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [options.isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  };

  const reactRefreshLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: ['react-refresh/babel'],
      },
    },
  };

  return [
    fileLoader,
    fontLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
    scssLoader,
    reactRefreshLoader,
  ];
}
