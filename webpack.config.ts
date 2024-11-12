import path from 'path';

import { BuildEnv, BuildPaths } from './config/webpack/build.types';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'NotFoundNetworkPage.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const local = env.local || false;

  const isDevelopment = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths,
    isDevelopment,
    local,
    port: PORT,
  });
};
