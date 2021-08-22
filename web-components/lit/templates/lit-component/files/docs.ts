import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
  const { name, nameCamelCase: Name } = context;

  return {
    relativePath: `${name}.docs.mdx`,
    content: `---
description: 'A lit component with hello world.'
labels: ['lit', 'html', 'environment', 'framework-less', 'vanillajs', 'vanilla js', 'web-components']
---
import './${name}';

## Overview
Basic lit component 

#### Example

Usage example:

ֿֿ\`\`\`js
import './${name}';

<${name} name="World"></${name}>
}
\`\`\`

Live example

\`\`\`js live=true
<${name} name="World"></${name}>
\`\`\`
`,
  };
};
