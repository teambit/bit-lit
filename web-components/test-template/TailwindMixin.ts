
import { adoptStyles, LitElement, unsafeCSS } from 'lit'
import styles from '@learn-bit-react/ui-library-wrappers.tailwind.configs.tailwind-config/styles.css';

declare global {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  export type LitMixin<T = unknown> = new (...args: any[]) => T & LitElement;
}


const stylesheet = unsafeCSS(styles)

export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    connectedCallback() {
      super.connectedCallback();
      //@ts-ignore
      adoptStyles(this.shadowRoot, [stylesheet])
    }
  };