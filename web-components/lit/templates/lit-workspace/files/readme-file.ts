export function readme() {
  return `# Welcome to your Bit with Lit Workspace

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.
This template come with the official Lit aspect pre-defined with the latest official version.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.

- **.gitignore**

Ignoring any files from version control

## Adding new components
run \`bit create lit my-lit-component\`

## Run this workspace
Make sure to first run \`bit compile\` then \`bit install\`.
Then you can run \`bit start\` and open [localhost:3000](http://localhost:3000)
`;
}
