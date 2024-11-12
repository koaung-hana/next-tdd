import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot('index.png');
});