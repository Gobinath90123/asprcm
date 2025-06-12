import { Page, expect } from '@playwright/test';
import { logger } from '../logger';

export async function navigateToLoginPage(page: Page) {
  logger.info('Navigating to login page');
  await page.goto('https://devrcmgenie.asprcmsolutions.com/');
  await expect(page.getByRole('heading', { name: 'Microsoft SSO login' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login with Microsoft' })).toBeVisible();
  logger.info('Login page loaded successfully');
}

export async function loginWithMicrosoft(page: Page, email: string, password: string) {
  logger.info('Attempting to login with Microsoft account');
  await page.getByRole('button', { name: 'Login with Microsoft' }).click();
  await expect(page.getByRole('img', { name: 'Microsoft' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(email);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('SmartWork@1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  logger.info('Login attempt completed');
}

export async function approveSignInRequest(page: Page) {
  logger.info('Approving sign-in request');
  await expect(page.getByRole('heading', { name: 'Stay signed in?' })).toBeVisible();
  await page.getByRole('button', { name: 'No' }).click();
  logger.info('Sign-in request approved');
}

export async function verifyDashboard(page: Page) {
  logger.info('Verifying dashboard visibility');
  await expect(page.getByText('Dashboard').first()).toBeVisible();
  logger.info('Dashboard verified successfully');
}

// Negative flow functions
export async function loginWithInvalidCredentials(page: Page) {
  logger.warn('Attempting to login with invalid credentials');
  await page.getByRole('button', { name: 'Login with Microsoft' }).click();
  await expect(page.getByRole('img', { name: 'Microsoft' })).toBeVisible();
 await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('jayakumarthiru@outlook.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('807177@Jai');
  await page.getByTestId('primaryButton').click();
  await expect(page.getByTestId('secondaryButton')).toBeVisible();
  await page.getByTestId('secondaryButton').click();
  logger.warn('Invalid login attempt completed');
}

export async function verifySignInFailure(page: Page) {
  logger.info('Verifying sign-in failure');
  await expect(page.getByText('Sorry, but we’re having')).toBeVisible();
  await expect(page.locator('#exceptionMessageContainer')).toBeVisible();
  logger.info('Sign-in failure verified successfully');
}

export const validEmail = 'gp2_test@twilightitsolutions.com';
export const validPassword = 'SmartWork@1234';

export async function loginWithMicrosoftAccount(page: Page) {
  logger.info('Starting login with Microsoft account');
  await navigateToLoginPage(page);
  await loginWithMicrosoft(page, validEmail, validPassword);
  await approveSignInRequest(page);
  await verifyDashboard(page);
  logger.info('Login with Microsoft account completed successfully');
}