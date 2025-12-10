const { test, expect } = require("@playwright/test");

// Base API URL (use your own or a mock server)
const BASE_URL = "https://fakestoreapi.com";

test("Get product list", async ({ request }) => {
  const response = await request.get(`${BASE_URL}/products`);

  // Validate status code
  expect(response.status()).toBe(200);

  // Convert response to JSON
  const data = await response.json();

  // Validate the data type
  expect(Array.isArray(data)).toBeTruthy();
  expect(data.length).toBeGreaterThan(0);

  console.log("Total products:", data.length);
});

test("Search product by ID", async ({ request }) => {
  const productId = 1;

  const response = await request.get(`${BASE_URL}/products/${productId}`);

  expect(response.status()).toBe(200);

  const product = await response.json();

  // Validate fields
  expect(product).toHaveProperty("id");
  expect(product).toHaveProperty("title");
  expect(product.id).toBe(productId);

  console.log("Product Title:", product.title);
});
