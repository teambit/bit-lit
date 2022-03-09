import { DependenciesEnv } from '@teambit/envs';
import { VariantPolicyConfigObject } from '@teambit/dependency-resolver';

export const LitEnvType = 'lit';

export class LitEnv implements DependenciesEnv {
  icon = "https://static.bit.dev/extensions-icons/lit.svg";

  getDependencies(): VariantPolicyConfigObject {
    return {
      devDependencies: {
        "@types/jest": "26.0.20",
        "@types/node": "12.20.4",
        // This is added as dev dep since our jest file transformer uses babel plugins that require this to be installed
        "@babel/runtime": "7.12.18",
      },
      peerDependencies: {
        "lit": "^2.0.0-rc.2"
      }
    };
  };
  
  async __getDescriptor() {
    return {
      type: LitEnvType,
    };
  }
}
