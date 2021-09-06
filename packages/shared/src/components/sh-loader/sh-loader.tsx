import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sh-loader',
  styleUrl: 'sh-loader.css',
  shadow: true,
})
export class ShLoader {
  render() {
    return (
      <Host>
        <div class="loader-container">
          <p class="loader-text">Loading interface...</p>
        </div>
      </Host>
    );
  }
}
