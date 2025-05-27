import { Page , expect } from '@playwright/test';

export async function verifyInitialPageElements(page) {
  await expect(page.getByRole('img', { name: 'RCM Genie Logo' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome to RCM Genie' })).toBeVisible();
  await expect(page.getByText('Transforming Revenue Cycles')).toBeVisible();
  await expect(page.getByText('Email Address')).toBeVisible();
}

export async function performLoginViaAuthenticatorApp(page: Page, email: string) {
  const emailTextbox = page.getByRole('textbox', { name: 'example@gmail.com' });
  await expect(emailTextbox).toBeVisible();
  await emailTextbox.fill(email);
  await page.waitForTimeout(2000);
  const authorizeButton = page.getByRole('button', { name: 'Authorize' });
  await expect(authorizeButton).toBeVisible();
  await authorizeButton.click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Check your Authenticator App.')).toBeVisible();
}

export async function setupTwoFactorAuthentication(page) {
  await expect(page.getByRole('heading', { name: 'Set up two-factor' })).toBeVisible();
  await expect(page.getByText('Enter the code from your')).toBeVisible();
  const firstInput = page.locator('input').first();
  await firstInput.click();
  await firstInput.fill('7');
  const verificationCodeTextbox = page.getByRole('textbox', { name: 'Verification code digit empty' });
  await verificationCodeTextbox.first().fill('1');
  await verificationCodeTextbox.fill('5');
  const submitButton = page.getByRole('button', { name: 'Submit' });
  await expect(submitButton).toBeVisible();
  await submitButton.click();
  await expect(page.getByText('Login successfully.')).toBeVisible();
}

export async function verifyDashboardElements(page) {
  await expect(page.getByText('Dashboard').first()).toBeVisible();
  await expect(page.getByText('Tickets')).toBeVisible();
  await expect(page.getByText('User Management')).toBeVisible();
  await expect(page.getByText('Reports')).toBeVisible();
  await expect(page.getByText('Client')).toBeVisible();
  await expect(page.getByText('Masters')).toBeVisible();
  await expect(page.getByText('Settings')).toBeVisible();
}

export async function logout(page) {
  await page.getByText('⋮').click();
  const logoutButton = page.getByRole('button', { name: 'Logout' });
  await expect(logoutButton).toBeVisible();
  await logoutButton.click();
  await expect(page.getByText('Logout successfully.')).toBeVisible();
}