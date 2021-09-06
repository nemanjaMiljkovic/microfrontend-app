import { newSpecPage } from '@stencil/core/testing';
import { ShWrapper } from '../sh-wrapper';

describe('sh-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShWrapper],
      html: `<sh-wrapper></sh-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <sh-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sh-wrapper>
    `);
  });
});
