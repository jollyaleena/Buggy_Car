import { test, expect } from '@playwright/test';

//User Registeration Flow
test('Positive Test Scenario: Register a new user with valid credentials', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('car');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('sample');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('user');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('T');
  await page.getByRole('textbox', { name: 'Password', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test@123');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Confirm Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Register' }).click();
});