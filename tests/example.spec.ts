import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('get github link', async ({ page }) => {
  await page.goto("https://matiashernanarroyo.com.ar/");
  await page.screenshot({path: 'screenshot.png'});
  // Click the get started link.
  await page.getByRole('link', { name: 'SKILLS' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*skill/);
});

test("has name in tile", async ({page})=> {
  await page.goto("https://matiashernanarroyo.com.ar/")

  await expect(page).toHaveTitle(/Matías Hernán Arroyo/);

})


