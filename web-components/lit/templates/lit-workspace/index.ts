import type { ScopeMain } from '@teambit/scope';
import { WorkspaceContext, WorkspaceTemplate } from '@teambit/generator';
import { workspaceConfig } from './files/workspace-config';
import { readme } from './files/readme-file';
import { gitIgnore } from './files/git-ignore';
import { tsConfig } from './files/ts-config';
import { assetTypes } from './files/types/asset';
import { styleTypes } from './files/types/style';
import {LitAspect} from '../../lit.aspect';

// export const litWorkspaceTemplate: WorkspaceTemplate = {
export const createLitWorkspaceTemplate = (scope: ScopeMain) => {
  const litWorkspaceTemplate: WorkspaceTemplate = {
    name: "lit",
    description: "lit workspace with pre-configured dependencies",
    generateFiles: async (context: WorkspaceContext) => {
      // const litEnvComponent = await scope.getRemoteComponent(ComponentID.fromString(LitAspect.id));
      // const litEnvIdWithVersion = litEnvComponent.id.toString();

      // fallback to hard coded version in case of loading from workspace during development of this aspect
      const litEnvIdWithVersion =
        context.aspectComponent?.id?.toString() ||
        "teambit.web-components/lit@0.0.21";
      
      return [
        {
          relativePath: "workspace.jsonc",
          content: await workspaceConfig(context, { litEnvIdWithVersion }),
        },
        {
          relativePath: `.gitignore`,
          content: gitIgnore(),
        },
        {
          relativePath: `tsconfig.json`,
          content: tsConfig,
        },
        {
          relativePath: `README.md`,
          content: readme(),
        },
        {
          relativePath: `types/asset.d.ts`,
          content: assetTypes,
        },
        {
          relativePath: `types/style.d.ts`,
          content: styleTypes,
        },
      ];
    },
    importComponents: () => {
      return [];
    },
  };
  return litWorkspaceTemplate;
};
