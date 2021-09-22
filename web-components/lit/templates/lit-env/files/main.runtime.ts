import { ComponentContext } from '@teambit/generator';

export function mainRuntimeFile({ namePascalCase: Name, name }: ComponentContext) {
  return `import { MainRuntime } from '@teambit/cli';
import { LitAspect, LitEnvMain } from '@teambit/web-components.lit';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ${Name}Aspect } from './${name}.aspect';
// import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
// const tsconfig = require('./typescript/tsconfig');

export class ${Name}Main {
  static slots = [];

  static dependencies = [LitAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([lit, envs]: [LitEnvMain, EnvsMain]) {
    const ${Name}Env = envs.compose(lit.litEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // lit.overrideTsConfig(tsconfig),
      // lit.useWebpack({
      //   previewConfig: [previewConfigTransformer],
      //   devServerConfig: [devServerConfigTransformer],
      // }),
      // lit.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      lit.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          }
        ]
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      lit.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          }
        ]
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 26.0.21 of jest's types package
       */
      lit.overrideDependencies({
        devDependencies: {
          // '"@types/jest": "26.0.21",
        }
      })
    ]);
    envs.registerEnv(${Name}Env);
    return new ${Name}Main();
  }
}

${Name}Aspect.addRuntime(${Name}Main);
`;
}
