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
  await expect(page.getByRole('link', { name: 'provider CPT Dictionary' })).toBeVisible();
  await page.getByRole('link', { name: 'provider CPT Dictionary' }).click();





  //Add
  await expect(page.getByRole('button', { name: 'Add New CPT Dictionary' })).toBeVisible();
  await page.getByRole('button', { name: 'Add New CPT Dictionary' }).click();
  await page.getByRole('combobox', { name: 'Select ICD' }).click();
  await page.getByRole('option', { name: 'ICD -' }).click();
  await page.getByRole('combobox', { name: 'Select Diagnosis Code' }).click();
  await page.getByRole('option', { name: 'DC -' }).click();
  await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).click();
  await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).fill('Testing');
  await page.getByRole('combobox', { name: 'Select Speciality' }).click();
  await page.getByRole('option', { name: 'Test' }).click();
  await page.getByRole('combobox', { name: 'Enter Select' }).first().click();
  await page.getByRole('option', { name: 'CPRT -' }).click();
  await page.getByRole('textbox', { name: 'CPT Code Description' }).click();
  await page.getByRole('textbox', { name: 'CPT Code Description' }).fill('Testing');
  await page.getByPlaceholder('MUE Limit').click();
  await page.getByPlaceholder('MUE Limit').fill('23.6');
  await page.getByRole('combobox', { name: 'Select Billing Frequency' }).click();
  await page.getByRole('option', { name: 'Per Week' }).click();
  await page.getByRole('combobox', { name: 'Enter Select' }).click();
  await page.getByRole('option', { name: '2 Units' }).click();
  await page.getByRole('combobox', { name: 'Select Unit Type' }).click();
  await page.getByRole('option', { name: '30 Minutes' }).click();
  await page.getByRole('textbox', { name: 'Enter Text Area' }).click();
  await page.getByRole('textbox', { name: 'Enter Text Area' }).fill('Testing');
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Created successfully.')).toBeVisible();


  //Edit

  await expect(page.getByRole('row', { name: 'ICD - 75.36 DC - 75.63' }).getByRole('button').first()).toBeVisible();
  await page.getByRole('row', { name: 'ICD - 75.36 DC - 75.63' }).getByRole('button').first().click();
  await page.getByRole('combobox', { name: 'Units' }).click();
  await page.getByRole('option', { name: '3 Units' }).click();
  await page.getByRole('combobox', { name: 'Minutes' }).click();
  await page.getByRole('option', { name: '45 Minutes' }).click();
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Updated successfully.')).toBeVisible();



  //Delete

  await expect(page.getByRole('row', { name: 'ICD - 75.36 DC - 75.63' }).getByLabel('Delete undefined')).toBeVisible();
  await page.getByRole('row', { name: 'ICD - 75.36 DC - 75.63' }).getByLabel('Delete undefined').click();
  await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('CPT Dictionary deleted')).toBeVisible();
});