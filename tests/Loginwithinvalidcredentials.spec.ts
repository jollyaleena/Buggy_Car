import { test, expect } from '@playwright/test';

test('Negative Test Scenario: Login with invalid credentials', async ({ page }, testInfo) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill('t1');
  await page.locator('input[name="password"]').fill('trse@123');
  await page.getByRole('button', { name: 'Login' }).click();

  //Assertions to check element visble or not
  await expect.soft(page.locator('text=Invalid username/password')).toBeVisible();

  // Screenshot after login with invalid credentials
    // const afterLogout = await page.screenshot();
    // await testInfo.attach('After login with invalid credentials', {
    //   body: afterLogout,
    //   contentType: 'image/png'
// });

 await expect(page).toHaveScreenshot()



});