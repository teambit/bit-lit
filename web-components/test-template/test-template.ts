import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { tw } from 'twind';

@customElement("test-template")
export class TestTemplate extends LitElement {
  static styles = css`
  `;

  @property()
  name = "Somebody";

  render() {
    return html`<p class="${tw`text-red-500`}">Hello, ${this.name}!</p>`;
  }
}
