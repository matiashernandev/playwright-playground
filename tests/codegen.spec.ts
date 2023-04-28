import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Text Input' }).click();
  await page.getByPlaceholder('MyButton').click();
  await page.getByPlaceholder('MyButton').fill('Sarasa');
  await page.getByRole('button', { name: 'Button That Should Change it\'s Name Based on Input Value' }).click();
  await page.getByRole('link', { name: 'UITAP' }).click();
  await page.getByRole('link', { name: 'Click' }).click();
  await page.getByRole('button', { name: 'Button That Ignores DOM Click Event' }).click();
});