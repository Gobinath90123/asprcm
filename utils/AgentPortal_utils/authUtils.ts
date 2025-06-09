import { Page, expect } from '@playwright/test';

export async function navigateToLoginPage(page: Page) {
  await page.goto('https://devrcmgenie.asprcmsolutions.com/');
  await expect(page.getByRole('heading', { name: 'Microsoft SSO login' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login with Microsoft' })).toBeVisible();
}

export async function loginWithMicrosoft(page: Page, email: string, password: string) {
  await page.getByRole('button', { name: 'Login with Microsoft' }).click();
  await expect(page.getByRole('img', { name: 'Microsoft' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(email);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}

export async function approveSignInRequest(page: Page) {
  await expect(page.getByRole('heading', { name: 'Stay signed in?' })).toBeVisible();
  await page.getByRole('button', { name: 'No' }).click();
}

export async function verifyDashboard(page: Page) {
  await expect(page.getByText('Dashboard').first()).toBeVisible();
}

// Negative flow functions
export async function loginWithInvalidCredentials(page: Page) {
  await page.getByRole('button', { name: 'Login with Microsoft' }).click();
  await expect(page.getByRole('img', { name: 'Microsoft' })).toBeVisible();
 await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('jayakumarthiru@outlook.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('807177@Jai');
  await page.getByTestId('primaryButton').click();
  await expect(page.getByTestId('secondaryButton')).toBeVisible();
  await page.getByTestId('secondaryButton').click();

}

export async function verifySignInFailure(page: Page) {
  await expect(page.getByText('Sorry, but we’re having')).toBeVisible();
  await expect(page.locator('#exceptionMessageContainer')).toBeVisible();
}