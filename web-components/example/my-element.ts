import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from "./my-component.scss";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  static get styles() {
    return [styles];
  }

  @property()
  name = "Somebody";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}