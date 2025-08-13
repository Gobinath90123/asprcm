import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devrcmgenie.asprcmsolutions.com/');
  await page.getByRole('button', { name: 'Login with Microsoft' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('asprcmtesting4@twilightitsolutions.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('SmartWork@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('combobox', { name: 'Organization', exact: true }).click();
  await page.getByRole('option', { name: 'Sunrise Health Systems Inc.' }).click();
  await page.getByRole('combobox', { name: 'Sub-Organization' }).click();
  await page.getByRole('option', { name: 'Sunrise Neurology Center' }).click();
  await page.getByRole('combobox', { name: 'Process' }).click();
  await page.getByRole('option', { name: 'Provider Credentialing' }).click();
  await expect(page.getByText('User Management')).toBeVisible();
  await page.getByLabel('User Management').click();
  await expect(page.getByRole('link', { name: 'rolesManagementIcon Roles and' })).toBeVisible();
  await page.getByRole('link', { name: 'rolesManagementIcon Roles and' }).click();
  await expect(page.getByText('Roles', { exact: true })).toBeVisible();
  await page.waitForTimeout(10000);
  await page.getByRole('row', { name: 'QC Agent Audit 10-08-2025 13-' }).getByRole('button').click();
  await page.waitForTimeout(10000);
  
  
  await expect(page.locator('div').filter({ hasText: /^Cpt Dictonary$/ }).getByRole('checkbox')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Cpt Dictonary$/ }).getByRole('checkbox').uncheck();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Permissions Updated')).toBeVisible();


// Again Edit
  await page.getByRole('row', { name: 'QC Agent Audit 10-08-2025 13-' }).getByRole('button').click();
  await expect(page.locator('div').filter({ hasText: /^Cpt Dictonary$/ }).getByRole('checkbox')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Cpt Dictonary$/ }).getByRole('checkbox').check();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Permissions Updated')).toBeVisible();
});
