import { newE2EPage } from '@stencil/core/testing';

describe('sh-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sh-button></sh-button>');

    const element = await page.find('sh-button');
    expect(element).toHaveClass('hydrated');
  });
});
