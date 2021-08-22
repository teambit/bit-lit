export function readme() {
  return `# Bit workspace for Lit components

This workspace contains a set of independently versioned and published [Lit](https://lit.dev/) components.

## Setup workspace

1. [Install Bit on your system](https://harmony-docs.bit.dev/getting-started/installing-bit)).
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

Note - It's recommended to publish components as part of your CI process. Learn more [here](https://harmony-docs.bit.dev/reference/ci-cd#version-and-export-components-on-ci).

## Maintainer docs

There are two files to be away when working with Bit:

- **workspace.jsonc** This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, Bit extensions as well as apply configurations for your components. This workspace has been setup so that all components use the Lit env. However you can create other components and apply other envs to them such as node, html, angular others.
- **.bitmap** This is an auto-generated file and includes the mapping of your components.

`;
}
