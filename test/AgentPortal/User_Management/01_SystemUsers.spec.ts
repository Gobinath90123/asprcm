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
  await expect(page.getByLabel('User Management').getByText('User Management')).toBeVisible();
  await page.getByLabel('User Management').click();



  //Add
  
  await expect(page.getByRole('button', { name: 'Add New System Users' })).toBeVisible();
  await page.getByRole('button', { name: 'Add New System Users' }).click();
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('Test User');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('asprcmtesting11@twilightitsolutions.com');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('E-21');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Testing');
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Success')).toBeVisible();



  //Edit

  await expect(page.getByRole('row', { name: 'E-21 Test User' }).getByRole('button').first()).toBeVisible();
  await page.getByRole('row', { name: 'E-21 Test User' }).getByRole('button').first().click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Testing Supervisor');
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Success')).toBeVisible();
  await expect(page.getByText('Testing Supervisor')).toBeVisible();



  //Delete

  await expect(page.getByRole('row', { name: 'E-21 Test User' }).getByLabel('Delete undefined')).toBeVisible();
  await page.getByRole('row', { name: 'E-21 Test User' }).getByLabel('Delete undefined').click();
  await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('System User deleted')).toBeVisible();

  
});