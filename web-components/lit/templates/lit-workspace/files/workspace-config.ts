import { WorkspaceContext } from '@teambit/generator';
import { getWorkspaceConfigTemplateParsed, stringifyWorkspaceConfig } from '@teambit/config';
import { assign } from 'comment-json';

type CreateWorkspaceConfigContext = {
  litEnvIdWithVersion: string
}

export async function workspaceConfig(
  { name, defaultScope, empty }: WorkspaceContext,
  { litEnvIdWithVersion }: CreateWorkspaceConfigContext
) {
  const scope = defaultScope || "company.scope";
  const configParsed = await getWorkspaceConfigTemplateParsed();
  configParsed["teambit.workspace/workspace"].name = name;
  configParsed["teambit.workspace/workspace"].defaultScope = scope;
  configParsed["teambit.generator/generator"] = {
    aspects: [
      litEnvIdWithVersion,
    ]
  };
  configParsed[litEnvIdWithVersion] = {};
  configParsed["teambit.dependencies/dependency-resolver"].packageManager =
    "teambit.dependencies/pnpm";
  configParsed["teambit.dependencies/dependency-resolver"].policy = {
    dependencies: {
      "@open-wc/testing-helpers": "1.8.12",
    },
    peerDependencies: {
      lit: "2.0.0-rc.2",
    },
  };

  const variants = {
    "teambit.workspace/variants": {
      "*": {
        [litEnvIdWithVersion]: {},
      },
    },
  };

  const configMerged = assign(configParsed, variants);

  return stringifyWorkspaceConfig(configMerged);
}
