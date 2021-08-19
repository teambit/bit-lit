import "./my-element";

// import { screen } from "testing-library__dom";
import { fixture } from "@open-wc/testing-helpers";

describe("simple-greeting", () => {

  beforeEach(async () => {
    await fixture(`<simple-greeting name="World"></simple-greeting>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("simple-greeting")[0].shadowRoot
        ?.textContent;
    
    // greeting = await screen.findByText("Hello");
    // greeting = screen.getByText("World");
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
