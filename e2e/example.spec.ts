import { test, expect } from '@playwright/test';
import { verifyInitialPageElements, performLoginViaAuthenticatorApp, setupTwoFactorAuthentication, verifyDashboardElements, logout } from '../utils/helper';
import { baseURL } from 'playwright.config';

test('test', async ({ page }) => {
  await page.goto(baseURL);
  await verifyInitialPageElements(page);
  await performLoginViaAuthenticatorApp(page, 'gobi@yopmail.com');
  // await setupTwoFactorAuthentication(page);
  // await verifyDashboardElements(page);
  // await logout(page);
});
