const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill('q1');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('T');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();