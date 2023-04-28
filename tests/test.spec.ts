import { chromium } from '@playwright/test'
import { test, expect } from '@playwright/test';

test("has name in tile", async ({page}) => {
  const browser = await chromium.launch({
    headless: false,
    args: [
      `--window-size=1280,${Math.round(window.screen.availHeight / 2)}` // Establecemos el ancho en 1280 y la altura en la mitad de la pantalla
    ]
  });
  const context = await browser.newContext();
  const page2 = await context.newPage();
  await page2.goto("https://matiashernanarroyo.com.ar/");
  await expect(page2).toHaveTitle(/Matías Hernán Arroyo/);
  await browser.close();
});
