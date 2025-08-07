import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devrcmgenie.asprcmsolutions.com/');
  await page.getByRole('button', { name: 'Login with Microsoft' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('asprcmtesting4@twilightitsolutions.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('SmartWork@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('combobox', { name: 'Organization', exact: true }).click();
  await page.getByRole('option', { name: 'Twilight Information' }).click();
  await page.getByRole('combobox', { name: 'Sub-Organization' }).click();
  await page.getByRole('option', { name: 'AppXperts Medical Group, LLC' }).click();
  await page.getByRole('combobox', { name: 'Process' }).click();
  await page.getByRole('option', { name: 'Provider Credentialing' }).click();
  await page.getByLabel('Masters').getByText('Masters').click();
  await expect(page.getByRole('link', { name: 'provider CPT Dictionary' })).toBeVisible();
  await page.getByRole('link', { name: 'provider CPT Dictionary' }).click();
  await expect(page.getByText('CPT Dictionary Add New CPT')).toBeVisible();
  await page.getByRole('button', { name: 'Add New CPT Dictionary' }).click();
  await expect(page.getByRole('heading', { name: 'Add CPT Dictionary' })).toBeVisible();
  
  
  
  
  
  
  await page.getByRole('combobox', { name: '7.1' }).click();
  
  await page.goto('https://devrcmgenie.asprcmsolutions.com/masters/cpt-code/create/');
  await page.getByRole('combobox', { name: 'Select ICD' }).click();
  await page.getByText('Select Diagnosis Code').click();
  await page.locator('#menu- div').first().click();
  await page.getByRole('combobox', { name: 'Select Speciality' }).click();
  await page.getByRole('combobox', { name: 'Enter Select' }).first().click();
  await page.locator('#menu- div').first().click();
  await page.goto('https://devrcmgenie.asprcmsolutions.com/masters/cpt-code/create/');
  await page.getByText('Select ICD').click();
  await page.getByText('Select Diagnosis Code').click();
  await page.getByRole('option', { name: 'Diag-' }).click();
  await page.getByRole('combobox', { name: 'Select Speciality' }).click(); 
 
});