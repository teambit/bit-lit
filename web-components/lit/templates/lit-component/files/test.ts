import { ComponentContext } from '@teambit/generator';

export const testFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.spec.tsx`,
    content: `import "./${name}";
import { fixture } from "@open-wc/testing-helpers";

describe("${name}", () => {

  beforeEach(async () => {
    await fixture(\`<${name} name="World"></${name}>\`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("${name}")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
`,
  };
};
