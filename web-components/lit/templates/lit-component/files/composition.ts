import { ComponentContext } from '@teambit/generator';

export const compositionFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.composition.tsx`,
    content: `import './${name}';

export const HtmlStringComposition = \`<${name} name="World"></${name}>\`;
`,
  };
};
