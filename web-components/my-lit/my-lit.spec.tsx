import "./my-lit";
import { fixture } from "@open-wc/testing-helpers";

describe("my-lit", () => {

  beforeEach(async () => {
    await fixture(`<my-lit name="World"></my-lit>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("my-lit")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
