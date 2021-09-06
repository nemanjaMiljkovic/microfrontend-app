import { newE2EPage } from '@stencil/core/testing';

describe('sh-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sh-wrapper></sh-wrapper>');

    const element = await page.find('sh-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
