import { ComponentTemplate, ComponentContext } from '@teambit/generator';
import { componentFile } from './files/component';
import { compositionFile } from './files/composition';
import { docsFile } from './files/docs';
import { testFile } from './files/test';

export const litComponent: ComponentTemplate = {
  name: 'lit',
  description: 'a lit component',

  generateFiles: (context: ComponentContext) => {
    const { name, namePascalCase: Name } = context;
    const indexFile = {
      relativePath: 'index.ts',
      content: `export { ${Name} } from './${name}';
`,
    };

    return [indexFile, componentFile(context), compositionFile(context), docsFile(context), testFile(context)];
  },
  config: {
    'teambit.web-components/lit': {},
    'teambit.envs/envs': {
      env: 'teambit.web-components/lit',
    }
  },
};
