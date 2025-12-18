
const { test, expect } = require('@playwright/test');
const { getAuthToken } = require('../../pages/helper/auth');

test('Get booking with auth token', async ({ request }) => {
  const token = await getAuthToken();

  const response = await request.get(
    'https://restful-booker.herokuapp.com/booking/1',
    {
      headers: {
        Cookie: `token=${token}`
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.firstname).toBeDefined();
});
