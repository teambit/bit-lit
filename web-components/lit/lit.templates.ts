import { ComponentTemplate, WorkspaceTemplate } from '@teambit/generator';
import type { ScopeMain } from "@teambit/scope";
import { litComponent } from './templates/lit-component';
import { createLitWorkspaceTemplate } from "./templates/lit-workspace";

export const componentTemplates: ComponentTemplate[] = [litComponent];

export const getWorkspaceTemplates = (scope: ScopeMain) => {
  const workspaceTemplates: WorkspaceTemplate[] = [
    createLitWorkspaceTemplate(scope),
  ];
  return workspaceTemplates;
};

