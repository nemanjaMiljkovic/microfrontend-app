import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sh-button',
  styleUrl: 'sh-button.css',
  shadow: true,
})
export class ShButton {
  render() {
    return (
      <Host>
        <button class="sh-btn">
          <slot />
        </button>
      </Host>
    );
  }
}
