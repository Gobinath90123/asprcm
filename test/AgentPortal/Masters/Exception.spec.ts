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
  await expect(page.getByLabel('Masters').getByText('Masters')).toBeVisible();
  await page.getByLabel('Masters').click();
  await expect(page.getByRole('link', { name: 'provider Exception' })).toBeVisible();
  await page.getByRole('link', { name: 'provider Exception' }).click();
  
  
  
  
  //Add
  await expect(page.getByRole('button', { name: 'Add New Exception' })).toBeVisible();
  await page.getByRole('button', { name: 'Add New Exception' }).click();
  await page.getByRole('combobox', { name: 'select Select' }).click();
  await page.getByRole('option', { name: 'Payment Posting' }).click();
  await page.getByRole('textbox', { name: 'Exception' }).click();
  await page.getByRole('textbox', { name: 'Exception' }).fill('Test Posting');
  await page.getByRole('combobox', { name: 'Select Document Required' }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByPlaceholder('Follow Up (In Days)').click();
  await page.getByPlaceholder('Follow Up (In Days)').fill('25');
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Created successfully.')).toBeVisible();


  //Edit

  await expect(page.getByRole('row', { name: 'Payment Posting Test Posting' }).getByRole('button').first()).toBeVisible();
  await page.getByRole('row', { name: 'Payment Posting Test Posting' }).getByRole('button').first().click();
  await page.getByPlaceholder('Follow Up (In Days)').click();
  await page.getByPlaceholder('Follow Up (In Days)').fill('45');
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Updated successfully.')).toBeVisible();


  //Delete

  await expect(page.getByRole('row', { name: 'Payment Posting Test Posting' }).getByLabel('Delete undefined')).toBeVisible();
  await page.getByRole('row', { name: 'Payment Posting Test Posting' }).getByLabel('Delete undefined').click();
  await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('Exception Type deleted')).toBeVisible();
});