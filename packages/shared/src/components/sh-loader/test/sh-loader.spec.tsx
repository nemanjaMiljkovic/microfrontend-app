import { newSpecPage } from '@stencil/core/testing';
import { ShLoader } from '../sh-loader';

describe('sh-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShLoader],
      html: `<sh-loader></sh-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <sh-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sh-loader>
    `);
  });
});
