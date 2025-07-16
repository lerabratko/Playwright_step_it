import { test, expect } from '@playwright/test';

test('Открыть статью на Wikipedia и проверить заголовок', async ({ page }) => {
  
  await page.goto('https://www.wikipedia.org');

  
  await page.getByRole('link', { name: 'Русский' }).click();

  
  await page.fill('input[name="search"]', 'Тестирование');
  await page.keyboard.press('Enter');

  
  try {
    await page.click('.mw-search-result-heading a');
  } catch (e) {
    
  }

  
  const heading = await page.textContent('#firstHeading');

  if (heading?.trim() === 'Тестирование') {
    console.log('✅ Заголовок верный');
  } else {
    console.error(`❌ Заголовок не совпадает: ${heading}`);
  }

  
});