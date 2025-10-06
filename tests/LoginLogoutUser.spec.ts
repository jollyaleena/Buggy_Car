import { test, expect } from '@playwright/test';

test('Login/Logout Functionality', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill('democar');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('T');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});