import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Заголовок случайной статьи отображается', async ({ page }) => {
  const home = new WikiHomePage(page);
  const main = new WikiMainPage(page);

  await home.goto();
  await home.chooseLanguage(); // по умолчанию "Русский"
  await main.openRandomArticle();

  const title = page.locator('#firstHeading');
  await expect(title).toBeVisible();
});