import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sh-wrapper',
  styleUrl: 'sh-wrapper.css',
  shadow: true,
})
export class ShWrapper {
  render() {
    return (
      <Host>
        <sh-loader />
      </Host>
    );
  }
}
