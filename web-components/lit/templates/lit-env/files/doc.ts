import { ComponentContext } from '@teambit/generator';

export function docFile({ name, componentId }: ComponentContext) {
  return `---
description: 'A standard Lit Element component development environment'
labels: ['lit', 'custom element', 'web component', 'typescript', 'env', 'extension']
---

## Overview

A customized environment which extends the default [Lit component development environment](https://bit.dev/teambit/web-components/lit) created by teambit. 
This environment can be applied to all your components or a set of components under the variants of your \`workspace.json\` file. 
When applied to components, those components will use your custom environment instead of the default environment. 
Environment components are just like any other Bit components in that they can be exported and then shared and used in various projects which, among other benefits, enables development standardisation across multiple teams.

### Usage Instructions

Under the **variant** section of your \`workspace.json\` file [create the set](https://harmony-docs.bit.dev/aspects/variants/#variants-selector-examples) of components you want to have the custom environment set for, and configure them to use the custom environment as follows - you can find the id of the extension in the \`${name}.aspect.ts\` file.

\`\`\`json
{
  "teambit.workspace/variants": {
    "{ui/**}, {pages/**}": {
      "${componentId}": {}
    }
  }
}
\`\`\`

## Runtime Configurations

Extend the \`main.runtime\` file when you want to add custom configurations, such as jest, weebpack or typescript configs.

### Compilation

By default, Component compilation uses the TypeScript compiler. Target format is \`ES2015\` which
supports execution from both NodeJS and browser runtimes for server-side rendering. You can modify the \`tsconfig.json\` file in this extension to add your own compiler options which will then be merged with the default configs set by teambit.

Example:

\`\`\`json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "es2015",
    "moduleResolution": "node",
    "lib": ["es2017", "dom"],
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "allowJs": true,
    "baseUrl": ".",
    "jsx": "react"
  }
}
\`\`\`

### Testing

Component testing is done through [Jest](https://jestjs.io/) with the default \`teambit.web-components/lit\` environment. You can modify the \`jestconfig.js\` file to add your own configurations which will then be merged with the default configs set by teambit.

Example:

To Override the Jest config to ignore transpiling from specific folders add this to the \`jestconfig.js\` file:

\`\`\`js
const reactJestConfig = require('@teambit.web-components/lit/jest/jest.config.js');
module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: ['/node_modules/(?!(prop-types|@teambit))']
};
\`\`\`

### Webpack

Bit uses webpack 5 to bundle components. You can modify the \`webpack.config.js\` file to add your own configurations which will then be merged with the default configs set by teambit.

Example:

\`\`\`ts
module.exports = {
  module: {
    // add your custom rules here
    rules: []
  }
};
\`\`\`

### ESLint

Bit uses ESLint to lint your components. You can add your own rules in the \`${name}.main.runtime\` file.

Example:

\`\`\`ts
react.useEslint({
  transformers: [
    (config) => {
      config.setRule('no-console', ['error']);
      // add more rules here
      return config;
    }
  ]
}),
\`\`\`

To use ESLint:

\`\`\`bash
bit lint
bit lint --fix
\`\`\`

### Formatting

Bit uses Prettier to format your components. You can add your own rules in the \`${name}.main.runtime\` file.

Example:

\`\`\`ts
react.usePrettier({
  transformers: [
    (config) => {
      config.setKey('tabWidth', 2);
      // add more rules here
      return config;
    }
  ]
}),
\`\`\`

To use Prettier:

\`\`\`bash
bit format --check
bit format
\`\`\`

### Dependencies

Override the default dependencies in the \`${name}.main.runtime\` file to include react types of a different version for example.

\`\`\`ts
react.overrideDependencies({
  devDependencies: {
    '@types/react': '17.0.3'
  }
});
\`\`\`

## Preview Configurations

Extend the \`${name}.preview.runtime\` file when you want to add your own customizations only for previewing in the Bit UI.

### Adding a Theme

A custom theme has been added to the env which wraps all the composition files with the required theme so they can be developed with the correct themeing rather than the browsers default. This is added only in the preview runtime and not in the main runtime meaning it is only applied to compositions and not when consuming components. Adding a theme when consuming should be done at App level as you component may be consumed in various apps and have different themes applied depending on where it is consumed.

Example:

\`\`\`ts
react.registerProvider([ThemeCompositions]);
`;
}
