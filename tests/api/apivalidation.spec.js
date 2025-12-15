const { test, expect } = require('@playwright/test');

test('validate api data', async ({ request }) => {

  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking/1",
    {
      headers: {
        "Accept": "application/json"
      }
    }
  );

  expect(response.status()).toBe(200)

  const jsonData = await response.json()
  console.log(jsonData)

  expect(jsonData).toHaveProperty("firstname")
  expect(jsonData).toHaveProperty("lastname")
  expect(typeof jsonData.totalprice).toBe("number")
  expect(typeof jsonData.depositpaid).toBe("boolean")

  expect(jsonData.bookingdates).toHaveProperty("checkin")
  expect(jsonData.bookingdates).toHaveProperty("checkout")

})
