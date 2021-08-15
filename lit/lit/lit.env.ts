import ts, { TsConfigSourceFile } from 'typescript';
import { merge, omit } from 'lodash';
import { resolve } from 'path';
import { pathNormalizeToLinux } from '@teambit/legacy/dist/utils';
import type { TsCompilerOptionsWithoutTsConfig } from '@teambit/typescript';
import { TypescriptMain } from '@teambit/typescript';
import { DependenciesEnv, CompilerEnv, DevEnv } from '@teambit/envs';
import { VariantPolicyConfigObject } from '@teambit/dependency-resolver';
import { LitAspect } from './lit.aspect';

const defaultTsConfig = require('./typescript/tsconfig.json');
const defaultBuildTsConfig = require('./typescript/tsconfig.build.json');

export class LitEnv implements DependenciesEnv, CompilerEnv {

constructor(
    /**
     * typescript extension.
    */
    private tsAspect: TypescriptMain,
) {}

  icon = 'https://static.bit.dev/extensions-icons/nodejs.svg';


  getDependencies(): VariantPolicyConfigObject {
    return {
      devDependencies: {
        '@types/jest': '26.0.20',
        '@types/node': '12.20.4',
        // This is added as dev dep since our jest file transformer uses babel plugins that require this to be installed
        '@babel/runtime': '7.12.18'
      },
    };
  }

  // Typescript config

  getTsConfig(targetTsConfig?: TsConfigSourceFile): TsConfigSourceFile {
    return targetTsConfig ? merge({}, defaultTsConfig, targetTsConfig) : defaultTsConfig;
  }

  getBuildTsConfig(targetTsConfig?: TsConfigSourceFile): TsConfigSourceFile {
    return targetTsConfig ? merge({}, defaultBuildTsConfig, targetTsConfig) : defaultBuildTsConfig;
  }

  createTsCompiler(
    targetConfig?: TsConfigSourceFile,
    compilerOptions: Partial<TsCompilerOptionsWithoutTsConfig> = {},
    tsModule = ts
  ) {
    const tsconfig = this.getTsConfig(targetConfig);
    const pathToSource = pathNormalizeToLinux(__dirname).replace('/dist/', '/src/');
    const additionalTypes = compilerOptions.types || [];
    const compileJs = compilerOptions.compileJs ?? true;
    const compileJsx = compilerOptions.compileJsx ?? true;
    const genericCompilerOptions = omit(compilerOptions, ['types', 'compileJs', 'compileJsx']);
    return this.tsAspect.createCompiler(
      {
        tsconfig,
        types: [
          ...additionalTypes,
        ],
        compileJs,
        compileJsx,
        ...genericCompilerOptions,
      },
      // @ts-ignore
      tsModule
    );
  }

  getCompiler(
    targetConfig?: TsConfigSourceFile,
    compilerOptions: Partial<TsCompilerOptionsWithoutTsConfig> = {},
    tsModule = ts
  ) {
    return this.createTsCompiler(targetConfig, compilerOptions, tsModule);
  }


}
