import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Скриншот случайной статьи сохраняется с названием из заголовка', async ({ page }) => {
  const home = new WikiHomePage(page);
  const main = new WikiMainPage(page);

  await home.goto();
  await home.chooseLanguage();
  await main.openRandomArticle();

  const title = page.locator('#firstHeading');
  const text = await title.textContent();

  expect(text?.trim()).not.toBe('');

  const safeTitle = text!.replace(/[\\/:*?"<>|]/g, '_');
  await page.screenshot({ path: `screenshots/${safeTitle}.png`, fullPage: true });
});