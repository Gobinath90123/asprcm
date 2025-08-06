import { Page, expect } from '@playwright/test';
import logger from '../logger';
import { authConfig } from './config';

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
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  logger.info('Login attempt completed');
}

export async function approveSignInRequest(page: Page) {
  logger.info('Approving sign-in request');
  await expect(page.getByRole('heading', { name: 'Stay signed in?' })).toBeVisible();
  await page.getByRole('button', { name: 'No' }).click();
  logger.info('Sign-in request approved');
  
  await page.getByRole('combobox', { name: 'Organization', exact: true }).click();
  await page.getByRole('option', { name: 'Twilight Information' }).click();
  await page.getByRole('combobox', { name: 'Sub-Organization' }).click();
  await page.getByRole('option', { name: 'AppXperts Medical Group, LLC' }).click();
  await page.getByRole('combobox', { name: 'Process' }).click();
  await page.getByRole('option', { name: 'Provider Credentialing' }).click();
}

export async function verifyTicketsModule(page: Page) {
  logger.info('Verifying Tickets module visibility');
  await page.waitForTimeout(2000);
      await expect(page.getByRole('button', { name: 'All Tickets' })).toBeVisible();
  logger.info('Tickets module verified successfully');
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

export async function loginWithMicrosoftAccount(page: Page) {
  logger.info('Starting login with Microsoft account');
  await navigateToLoginPage(page);
  await loginWithMicrosoft(page, authConfig.email, authConfig.password);
  await approveSignInRequest(page);
  await verifyTicketsModule(page);
  logger.info('Login with Microsoft account completed successfully');
}