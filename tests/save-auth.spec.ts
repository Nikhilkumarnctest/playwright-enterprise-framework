import { test } from '@playwright/test';

test('authenticate with Salesforce', async ({ page }) => {
  await page.goto('/lightning/page/home');

  // Complete the Salesforce login and any required MFA manually.
  await page.pause();

  // After confirming that Home is authenticated:
  await page.context().storageState({
    path: 'salesforce-auth.json',
  });
});