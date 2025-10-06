import { test, expect } from '@playwright/test';

test('Negative Test Scenario: Register a new user with existing username', async ({ page } , testInfo) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('car');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('new');
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

  //Assertion to check element is visible or not
   await expect(page.locator('text=UsernameExistsException: User already exists')).toBeVisible();

  // Screenshot after Register with existing user
//     const afterLogout = await page.screenshot();
//     await testInfo.attach('After Register with existing user', {
//       body: afterLogout,
//       contentType: 'image/png'
// });

await expect(page).toHaveScreenshot()


});