import { ComponentContext } from '@teambit/generator';

export const componentFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;
  return {
    relativePath: `${name}.tsx`,
    content: `import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("${name}")
export class ${Name} extends LitElement {
  static styles = css\`
    p {
      color: blue;
    }
  \`;

  @property()
  name = "Somebody";

  render() {
    return html\`<p>Hello, \${this.name}!</p>\`;
  }
}
`,
  };
};
