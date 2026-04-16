import { test, expect } from '@playwright/test';

test.describe('Homebase Listing Features E2E', () => {

  test('Toggles currency, filters by land, and clicks WhatsApp link', async ({ page }) => {
    // Mock the API endpoint
    await page.route('/api/rates', async route => {
      await route.fulfill({ json: { kesToUsd: 0.0075, fallback: false } });
    });

    await page.goto('/listings');

    // Filter by 'Land'
    const landFilterBtn = page.getByRole('button', { name: 'Land' }).first();
    // Wait for data load, check if button is visible
    await expect(landFilterBtn).toBeVisible({ timeout: 10000 });
    await landFilterBtn.click();

    // The URL should have ?type=land
    await expect(page).toHaveURL(/.*type=land/);

    // Verify a land specific badge exists
    // we use a more generic locator because tailwind compiled classes might be different
    // actually, just look for the text 'Land' in the badge
    await expect(page.getByText('Land').first()).toBeVisible();

    // Currency Toggle check
    // Wait for KES price
    const usdToggle = page.getByRole('button', { name: 'Set currency to USD' }).first();
    await usdToggle.click();

    // Verify USD price appears
    await expect(page.getByText('≈ KES').first()).toBeVisible();

    // Click WhatsApp button
    // It should open a new tab with wa.me link
    const whatsappBtn = page.locator('a[aria-label="Contact Agent on WhatsApp"]').first();
    await expect(whatsappBtn).toBeVisible();

    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      whatsappBtn.click()
    ]);

    await newPage.waitForLoadState();
    // Ensure the WhatsApp URL was opened
    expect(newPage.url()).toContain('wa.me/254');
  });

});
