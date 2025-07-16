import { test, expect } from '@playwright/test';

test('Searches for OpenAI on Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.fill('input[name="search"]', 'OpenAI');
  await page.press('input[name="search"]', 'Enter');
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveTitle(/OpenAI/i);
});