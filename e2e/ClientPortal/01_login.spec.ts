import { test, expect } from '@playwright/test';
import { verifyInitialPageElements, performLoginViaAuthenticatorApp,enterTOTPInTwoFactorAuthentication, verifyDashboardElements } from '../../utils/ClientPortal_utils/helper';
import { clientBaseURL } from 'playwright.config';


test.describe('Login Tests', () => {

test('Ensures that all images, text content, input fields, and buttons on the agent login page load and display correctly across supported browsers.', async ({ page }) => {
  await page.goto(clientBaseURL);
  await verifyInitialPageElements(page);
});

test('Validates that users who have enabled 2FA via the authenticator app can log in successfully in subsequent sessions.', async ({ page }) => {
  await page.goto(clientBaseURL);
  //await verifyInitialPageElements(page);
  await performLoginViaAuthenticatorApp(page, 'jayakumar@yopmail.com');
  await enterTOTPInTwoFactorAuthentication(page, 'DQNCKZLVCVNUYKAQ' );
  await verifyDashboardElements(page)
});

test('Validates that login attempts with an unregistered email are blocked and an appropriate error message is displayed.', async ({ page }) => {
  await page.goto(clientBaseURL);
  await verifyInitialPageElements(page);
  await performLoginViaAuthenticatorApp(page, 'sm@yopmail.com');
  await expect(page.getByText('User not found.')).toBeVisible();
});


});