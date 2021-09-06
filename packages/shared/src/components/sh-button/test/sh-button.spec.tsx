import { newSpecPage } from '@stencil/core/testing';
import { ShButton } from '../sh-button';

describe('sh-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShButton],
      html: `<sh-button></sh-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sh-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sh-button>
    `);
  });
});
