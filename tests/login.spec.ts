import { test } from '@playwright/test'; 
import { LoginPage } from '../pages/LoginPage'; 
test('Тест логина', async ({ page }) => { 
const loginPage = new LoginPage(page); 
await page.goto('https://google.com/login'); 
await loginPage.login('myUser', 'myPassword'); 
}); 
