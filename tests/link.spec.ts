import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Случайная статья содержит хотя бы одну внутреннюю ссылку', async ({ page }) => {
  const home = new WikiHomePage(page);
  const main = new WikiMainPage(page);

  await home.goto();
  await home.chooseLanguage();
  await main.openRandomArticle();

  const internalLinks = page.locator('a[href^="/wiki/"]:not([href*=":"])');
  const count = await internalLinks.count();

  expect(count).toBeGreaterThan(0);
});