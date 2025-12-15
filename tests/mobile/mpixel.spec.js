const { test, devices } = require('@playwright/test');

test.use({
  ...devices['Pixel 5']
})

test('Pixel 5 emulation test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
 // await page.screenshot({ path: 'pixel5.png' });
});
