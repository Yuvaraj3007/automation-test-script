const{test,expect}=require('@playwright/test')



    test('test', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/register');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('yuvaraj');
  await page.getByRole('textbox', { name: 'First name:' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'First name:' }).fill('yuvarajjjjjjjjjjjjjjjjjjjjjjjjj267832868237');

})