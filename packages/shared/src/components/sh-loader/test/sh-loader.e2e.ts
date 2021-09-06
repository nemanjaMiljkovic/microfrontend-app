import { newE2EPage } from '@stencil/core/testing';

describe('sh-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sh-loader></sh-loader>');

    const element = await page.find('sh-loader');
    expect(element).toHaveClass('hydrated');
  });
});
