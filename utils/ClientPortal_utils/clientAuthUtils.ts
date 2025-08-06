import { Page , expect } from '@playwright/test';
const OTPAuth = require('otpauth');


export async function verifyInitialPageElements(page) {
  await expect(page.getByRole('img', { name: 'RCM Genie Logo' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome to RCM Genie' })).toBeVisible();
  await expect(page.getByText('Transforming Revenue Cycles')).toBeVisible();
  await expect(page.getByText('Email Address')).toBeVisible();
}

export async function performLoginViaAuthenticatorApp(page: Page, email: string) {
  await page.waitForTimeout(2000);
  const emailTextbox = page.getByRole('textbox', { name: 'example@gmail.com' });
  await expect(emailTextbox).toBeVisible();
  await emailTextbox.fill(email);
  await page.waitForTimeout(2000);
  const authorizeButton = page.getByRole('button', { name: 'Authorize' });
  await expect(authorizeButton).toBeVisible();
  await authorizeButton.click();
  await page.waitForTimeout(2000);
}

export async function setupTwoFactorAuthentication(page) {
    await expect(page.getByText('Check your Authenticator App.')).toBeVisible();
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

export function generateTOTP(secret: string): string {
    const totp = new OTPAuth.TOTP({
        issuer: 'aimx-backend-app',
        label: 'jayakumar@yopmail.com',
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret: OTPAuth.Secret.fromBase32(secret),
    });

    const code = totp.generate();
    console.log('Generated TOTP code:', code);
    return code;
}

export async function enterTOTPInTwoFactorAuthentication(page: Page, secret : string) {
  await expect(page.getByRole('heading', { name: 'Two-factor authentication' })).toBeVisible();
await expect(page.getByText('Enter the code from your')).toBeVisible();
    const totpCode = generateTOTP(secret); // e.g., "482395"
    const digits = totpCode.split('');

    const inputBoxes = await page.locator('input[type="text"]').all(); // or use a specific selector
    for (let i = 0; i < digits.length && i < inputBoxes.length; i++) {
        await inputBoxes[i].fill(digits[i]);
        await page.waitForTimeout(1000);
    }

    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Login successfully.')).toBeVisible();
}


export async function verifyDashboardElements(page) {
  await expect(page.getByText('Dashboard').first()).toBeVisible();
  await expect(page.getByText('Tickets')).toBeVisible();
  await expect(page.getByText('User Management')).toBeVisible();
  await expect(page.getByText('Reports')).toBeVisible();
  await expect(page.getByText('Sub Organizations')).toBeVisible();
  await expect(page.getByText('Masters')).toBeVisible();
  await expect(page.getByText('Settings', { exact: true })).toBeVisible();
}

export async function logout(page) {
  await page.getByText('⋮').click();
  const logoutButton = page.getByRole('button', { name: 'Logout' });
  await expect(logoutButton).toBeVisible();
  await logoutButton.click();
  await expect(page.getByText('Logout successfully.')).toBeVisible();
}

export async function fillOtp(page: Page, otp: string) {
    await page.waitForTimeout(3000);
    for (let i = 0; i < otp.length; i++) {
        await page.getByRole('textbox', { name: `Please enter OTP character ${i + 1}` }).fill(otp[i]);
    }
    await page.getByRole('button', { name: 'Verify' }).click();
}


