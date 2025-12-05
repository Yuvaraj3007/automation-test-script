import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Computers' }).first().click();
  await page.getByRole('link', { name: 'Desktops' }).first().click();
  await page.getByRole('link', { name: 'Electronics' }).first().click();
  await page.getByRole('list').filter({ hasText: 'Books Computers Desktops' }).getByRole('list').click();
  await page.getByRole('listitem').nth(4).click();
  await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/books?orderby=11');
  await page.goto('https://demowebshop.tricentis.com/books?orderby=11');
  await page.locator('#products-viewmode').selectOption('https://demowebshop.tricentis.com/books?orderby=11&viewmode=list');
  await page.goto('https://demowebshop.tricentis.com/books?orderby=11&viewmode=list');
});