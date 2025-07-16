import { test, expect } from '@playwright/test';

test('Проверка избранной статьи на русской Википедии', async ({ page }) => {
  // 1. Зайти на Википедию
  await page.goto('https://www.wikipedia.org/');

  // 2. Выбрать русский язык
  await page.click('a#js-link-box-ru');

  // 3. Найти блок «Избранная статья»
  const featuredArticle = await page.locator('#main-tfa');

  // Проверить, что блок существует
  await expect(featuredArticle).toBeVisible();

  // 4. Проверить, что в нём есть заголовок (обычно жирный текст <b>)
  const heading = featuredArticle.locator('b').first();
  await expect(heading).toBeVisible();
  await expect(heading).not.toHaveText('');

  // И что есть хотя бы один непустой абзац
  const paragraph = featuredArticle.locator('p');
  const paragraphCount = await paragraph.count();
  let hasText = false;

  for (let i = 0; i < paragraphCount; i++) {
    const text = await paragraph.nth(i).innerText();
    if (text.trim().length > 0) {
      hasText = true;
      break;
    }
  }

  expect(hasText).toBeTruthy();
});