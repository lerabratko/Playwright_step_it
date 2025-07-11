import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Случайная статья содержит хотя бы один параграф', async ({ page }) => {
  const home = new WikiHomePage(page);
  const main = new WikiMainPage(page);

  await home.goto();
  await home.chooseLanguage();
  await main.openRandomArticle();

  const paragraphs = page.locator('p');
  const count = await paragraphs.count();

  expect(count).toBeGreaterThan(0);
});
