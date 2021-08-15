import { VariantPolicyConfigObject } from '@teambit/dependency-resolver';
import { merge } from 'lodash';
import { TsConfigSourceFile } from 'typescript';
import type { TsCompilerOptionsWithoutTsConfig } from '@teambit/typescript';
import { TypescriptMain } from '@teambit/typescript';
import { BuildTask } from '@teambit/builder';
import { Compiler } from '@teambit/compiler';
import { PackageJsonProps } from '@teambit/pkg';
import { EnvsAspect, EnvsMain, EnvTransformer, Environment } from '@teambit/envs';
import { HtmlAspect, HtmlMain } from "@teambit/html";
import {
  previewConfigTransformer,
  devServerConfigTransformer,
} from "./webpack/webpack-transformers";
import { UseWebpackModifiers } from "@teambit/react";
import { LitEnv } from './lit.env';

const newtsConfig = require("./typescript/tsconfig.json");

type LitDeps = [
  EnvsMain,
  HtmlMain,
  TypescriptMain,
];

export class LitEnvMain {
  constructor(
    private html: HtmlMain,
    private litEnv: LitEnv,
    private envs: EnvsMain
    ) {}

  /**
   * override the TS config of the environment.
   */
  overrideTsConfig: (
    tsconfig: TsConfigSourceFile,
    compilerOptions?: Partial<TsCompilerOptionsWithoutTsConfig>,
    tsModule?: any
  ) => EnvTransformer = this.html.overrideTsConfig.bind(this.html);

  /**
   * override the jest config of the environment.
   */
  overrideJestConfig = this.html.overrideJestConfig.bind(this.html);

  /**
   * override the env build pipeline.
   */
  overrideBuildPipe: (tasks: BuildTask[]) => EnvTransformer = this.html.overrideBuildPipe.bind(this.html);

  /**
   * override the env compilers list.
   */
  overrideCompiler: (compiler: Compiler) => EnvTransformer = this.html.overrideCompiler.bind(this.html);

  /**
   * override the env compilers tasks in the build pipe.
   */
  overrideCompilerTasks: (tasks: BuildTask[]) => EnvTransformer = this.html.overrideCompilerTasks.bind(this.html);

  /**
   * override the build ts config.
   */
  overrideBuildTsConfig: (
    tsconfig: any,
    compilerOptions?: Partial<TsCompilerOptionsWithoutTsConfig>
  ) => EnvTransformer = this.html.overrideBuildTsConfig.bind(this.html);

  /**
   * override package json properties.
   */
  overridePackageJsonProps: (props: PackageJsonProps) => EnvTransformer = this.html.overridePackageJsonProps.bind(
    this.html
  );

  /**
   * override the env's dev server and preview webpack configurations.
   * Replaces both overrideDevServerConfig and overridePreviewConfig
   */
  /**
   * override the env's dev server and preview webpack configurations.
   * Replaces both overrideDevServerConfig and overridePreviewConfig
   */
  useWebpack(modifiers?: UseWebpackModifiers) {
    const mergedModifiers: UseWebpackModifiers = {
      previewConfig: [previewConfigTransformer].concat(modifiers?.previewConfig ?? []),
      devServerConfig: [devServerConfigTransformer].concat(modifiers?.devServerConfig ?? []),
    };
    return this.html.useWebpack(mergedModifiers);
  }

  /**
   * override the dependency configuration of the component environment.
   */
  overrideDependencies(dependencyPolicy: VariantPolicyConfigObject) {
    return this.envs.override({
      getDependencies: () => merge(dependencyPolicy, this.litEnv.getDependencies()),
    });
  }

  /**
   * create a new composition of the lit environment.
   */
  compose(transformers: EnvTransformer[], targetEnv: Environment = {}) {
    return this.envs.compose(this.envs.merge(targetEnv, this.litEnv), transformers);
  }

  static dependencies: any = [EnvsAspect, HtmlAspect];

  static async provider([envs, html, tsAspect]: LitDeps) {
    const litEnv: LitEnv = envs.merge(new LitEnv(tsAspect), html.htmlEnv);

    const webpackModifiers: UseWebpackModifiers = {
      previewConfig: [previewConfigTransformer],
      devServerConfig: [devServerConfigTransformer],
    };
    const LitEnvEnv = html.compose([
      html.overrideTsConfig(newtsConfig),
      html.overrideBuildTsConfig(newtsConfig),
      html.useWebpack(webpackModifiers)
    ]);

    envs.registerEnv(LitEnvEnv);

    return new LitEnvMain(html, litEnv, envs);
  }
}
