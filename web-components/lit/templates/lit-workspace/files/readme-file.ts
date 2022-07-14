export function readme() {
  return `# Bit workspace for Lit components

This workspace contains a set of independently versioned and published [Lit](https://lit.dev/) components.

## Setup workspace

1. [Install Bit on your system](https://bit.dev/docs/getting-started/installing-bit/installing-bit)).
1. Clone this repository.
1. Run \`bit install\`.

Start the component dev server:

\`\`\`sh
bit start
\`\`\`

Add dependencies:

\`\`\`sh
bit install my-dependency
\`\`\`

Create a new component

\`\`\`sh
bit create lit my-component
\`\`\`

## Component features

The following files can be added to each component to take advantage of further features Bit provides.

- \`my-component.docs.md/x\` - Add documentation for your component.
- \`my-component.specs.js\` - Add test to your component.
- \`my-component.composition.js\` - Mount your component in a demo application, or multiple applications/contexts, to see it rendered.

## Version and publish

To publish components run:

\`\`\`sh
bit tag -a -m 'tag message here' && bit export
\`\`\`

:::note 
It is recommended to publish components as part of your CI process. Learn more [here](https://bit.dev/docs/getting-started/installing-bit/getting-started/setup-ci#version-and-export-components-from-ci).
:::

## Maintainer docs

There are two files to be aware of when working with Bit:

- **workspace.jsonc** This is the main configuration file of your bit workspace. Here you can configure dependency rules for components, manage their scopes and configure custom aspects to be used in the workspace
You can also control aesthetic aspects of the workspace such as name and icon as well as default directory and scope. 
It is where dependencies are found when you install anything.
  
- **.bitmap** This is an auto-generated file and includes the directory mapping of your components.

`;
}
