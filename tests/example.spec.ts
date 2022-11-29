import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://172.27.62.137:3000/astroTemplate/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AstroTemplate/);
  
});
