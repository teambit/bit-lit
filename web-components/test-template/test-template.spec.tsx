import "./test-template";
import { fixture } from "@open-wc/testing-helpers";

describe("test-template", () => {

  beforeEach(async () => {
    await fixture(`<test-template name="World"></test-template>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("test-template")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
