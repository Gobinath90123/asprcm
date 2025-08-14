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
  await expect(page.getByText('Masters')).toBeVisible();
  await page.getByLabel('Masters').click();
  await expect(page.getByRole('link', { name: 'provider Action and Status' })).toBeVisible();
  await page.getByRole('link', { name: 'provider Action and Status' }).click();



  //Add

  await expect(page.getByRole('button', { name: 'Add New Action and Status' })).toBeVisible();
  await page.getByRole('button', { name: 'Add New Action and Status' }).click();
  await page.getByRole('combobox', { name: 'Select Process' }).click();
  await page.getByRole('option', { name: 'Payment Posting' }).click();
  await page.getByRole('combobox', { name: 'Select Status Code' }).click();
  await page.getByRole('option', { name: 'PPS -' }).click();
  await page.getByRole('combobox', { name: 'Select Action Code' }).click();
  await page.getByRole('option', { name: 'PDS -' }).click();
  await page.getByRole('combobox', { name: 'Select Documents Required' }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByPlaceholder('Follow Up (In Days)').click();
  await page.getByPlaceholder('Follow Up (In Days)').fill('15');
  await page.getByRole('combobox', { name: 'Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.waitForTimeout(7000)


  //Edit

  await expect(page.getByRole('row', { name: 'Payment Posting PPS - 25 PDS' }).getByRole('button').first()).toBeVisible();
  await page.getByRole('row', { name: 'Payment Posting PPS - 25 PDS' }).getByRole('button').first().click();
  await page.getByPlaceholder('Follow Up (In Days)').click();
  await page.waitForTimeout(5000)
  await page.getByPlaceholder('Follow Up (In Days)').fill('75');
  await page.waitForTimeout(4000)
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.waitForTimeout(17000)
  //await expect(page.getByText('Updated successfully.')).toBeVisible();
  //await page.waitForTimeout(8000)



  //Delete

  await expect(page.getByRole('row', { name: 'Payment Posting PPS - 25 PDS' }).getByLabel('Delete undefined')).toBeVisible();
  await page.getByRole('row', { name: 'Payment Posting PPS - 25 PDS' }).getByLabel('Delete undefined').click();
  await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('Action and Status deleted')).toBeVisible();
});