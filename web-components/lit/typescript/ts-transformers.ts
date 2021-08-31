import * as path from 'path';
import {
  TsConfigTransformer,
  TypescriptConfigMutator,
} from "@teambit/typescript";

const devTsConfig = require('./tsconfig.json');
const buildTsConfig = require('./tsconfig.build.json');

export const commonTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator
) => {
  const newConfig = config.addTypes([path.join(__dirname, 'lit-styles.d.ts')])
  return newConfig;
};

/**
 * Transformation for the dev config only
 * @param config
 * @param context
 * @returns
 */
export const devConfigTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator,
) => {
  const newConfig = commonTransformer(config, {});
  newConfig.mergeTsConfig(devTsConfig);
  return newConfig;
};

/**
 * Transformation for the build only
 * @param config
 * @param context
 * @returns
 */
export const buildConfigTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator
) => {
  const newConfig = commonTransformer(config, {});
  newConfig.mergeTsConfig(buildTsConfig);
  return newConfig;
};

