import { ComponentContext } from '@teambit/generator';

export function docFile({ name, componentId }: ComponentContext) {
  return `---
description: 'A standard Lit Element component development environment'
labels: ['lit', 'custom element', 'web component', 'typescript', 'env', 'extension']
---

## Overview

A customized environment which extends the default [Lit component development environment](https://bit.cloud/teambit/web-components/lit) created by teambit. 
This environment can be applied to all your components or a set of components under the variants of your \`workspace.json\` file. 
When applied to components, those components will use your custom environment instead of the default environment. 
Environment components are just like any other Bit components in that they can be exported and then shared and used in various projects which, among other benefits, enables development standardisation across multiple teams.

### Usage Instructions

When creating a component with the Lit env's component template - \`bit create lit <component_name>\` - the component will automatically be assigned the lit env
as its environment. 

If you are adding components manually then you have two options for setting the lit env as the environment.

1. Use the command \`bit env set "<component selector pattern>" ${componentId}\` (can be run on multiple components simultaneously, according to the selecting pattern used)

1. Under the **variant** section of your \`workspace.json\` file [create the selector](https://bit.dev/docs/workspace/variants) to capture the components you 
want the lit env to be applied to.

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
supports execution from both NodeJS and browser runtimes for server-side rendering. 

Typescript updates are implemented via the useTypescript function (see the main.runtime file for syntax), which takes tsTransformers as inputs.  
There is a sample transformer file in this env's files, 

You can modify the \`tsconfig.json\` file in this 
extension to add your own compiler options which will then be merged with the default configs set by teambit.

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
  }
}
\`\`\`

After modifying this file, 

### Testing

Component testing is done through [Jest](https://jestjs.io/) with the default \`teambit.web-components/lit\` environment. You can modify the \`jestconfig.js\` file to add your own configurations which will then be merged with the default configs set by teambit.

Example:

To Override the Jest config to ignore transpiling from specific folders add this to the \`jest.config.js\` file:

\`\`\`js
const packagesToTransform = [
  //  // add packages you want jest to transpile here. E.g. @bitOrgName so that all your bit components will be transpiled in your tests
  // ];
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
lit.useEslint({
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
lit.usePrettier({
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

Override the default dependencies in the \`${name}.main.runtime\` file to include jest types of a different version for example.

\`\`\`ts
lit.overrideDependencies({
  devDependencies: {
    '@types/jest': '26.0.21',
  }
});
\`\`\`
`
}