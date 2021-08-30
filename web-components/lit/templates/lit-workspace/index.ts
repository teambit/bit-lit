import {ComponentID} from '@teambit/component';
import type { ScopeMain } from '@teambit/scope';
import { WorkspaceContext, WorkspaceTemplate } from '@teambit/generator';
import { workspaceConfig } from './files/workspace-config';
import { readme } from './files/readme-file';
import { gitIgnore } from './files/git-ignore';
import { assetTypes } from './files/types/asset';
import { styleTypes } from './files/types/style';
import {LitAspect} from '../../lit.aspect';

// export const litWorkspaceTemplate: WorkspaceTemplate = {
export const createLitWorkspaceTemplate = (scope: ScopeMain) => {
  const litWorkspaceTemplate: WorkspaceTemplate = {
    name: "lit",
    description: "lit workspace with demo components",
    generateFiles: async (context: WorkspaceContext) => {
      // const litEnvComponent = await scope.getRemoteComponent(ComponentID.fromString(LitAspect.id));
      // const litEnvIdWithVersion = litEnvComponent.id.toString();
      // TODO: remove once fixing the argument
      const litEnvIdWithVersion = "teambit.web-components/lit@0.0.10";
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
