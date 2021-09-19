import { ComponentTemplate, WorkspaceTemplate } from '@teambit/generator';
import type { ScopeMain } from "@teambit/scope";
import { litComponent } from './templates/lit-component';
import { createLitWorkspaceTemplate } from "./templates/lit-workspace";
import { litEnvTemplate } from "./templates/lit-env";

export const componentTemplates: ComponentTemplate[] = [litComponent, litEnvTemplate];

export const getWorkspaceTemplates = (scope: ScopeMain) => {
  const workspaceTemplates: WorkspaceTemplate[] = [
    createLitWorkspaceTemplate(scope),
  ];
  return workspaceTemplates;
};

