import {
  TsConfigTransformer,
  TypescriptConfigMutator,
} from "@teambit/typescript";

const devTsConfig = require('./tsconfig.json');
const buildTsConfig = require('./tsconfig.build.json');


/**
 * Transformation for the dev config only
 * @param config
 * @param context
 * @returns
 */
export const devConfigTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator,
) => {
  const newConfig = config.mergeTsConfig(devTsConfig)
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
  const newConfig = config.mergeTsConfig(buildTsConfig);
  return newConfig;
};

