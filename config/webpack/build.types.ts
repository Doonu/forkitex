export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  local?: boolean;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDevelopment: boolean;
  port: number;
  local?: boolean;
}
