const {test,expect}=require('@playwright/test')
test('login using API', async ({ page }) => {
  const response = await page.request.post('https://demowebshop.tricentis.com/login', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  expect(response.ok()).toBeTruthy();

  await page.goto('/dashboard');
  // User is already logged in
});
