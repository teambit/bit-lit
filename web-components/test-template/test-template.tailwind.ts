import {html, css, LitElement} from 'lit';
import type { TemplateResult } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { TwLitElement } from './TwLitElement';

@customElement("test-template-tailwind")
export class TestTemplateTailwind extends TwLitElement {
  static styles = css`
  `;

  @property()
  name = "Somebody";

  render(): TemplateResult {
    return html`<p class="btn text-red-600 text-2xl">Hello, ${this.name}!</p>`;
  }
}
