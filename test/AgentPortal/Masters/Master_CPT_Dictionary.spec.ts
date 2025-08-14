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


  //Add

  await page.getByRole('link', { name: 'provider CPT Dictionary' }).click();
  await expect(page.getByRole('button', { name: 'Add New CPT Dictionary' })).toBeVisible();
  await page.getByRole('button', { name: 'Add New CPT Dictionary' }).click();
  await expect(page.getByRole('heading', { name: 'Add CPT Dictionary' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Select ICD' }).click();
  await page.click("(//*[@role='option'])[1]");

  
  await page.getByRole('combobox', { name: 'Select Diagnosis Code' }).click();
  await page.getByRole('button', { name: 'Add Diagnosis Code' }).click();
  
  
  await expect(page.getByRole('heading', { name: 'Add Diagnosis Code' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Select ICD' }).click();
  await page.click("(//*[@role='option'])[1]");
 await page.getByRole('textbox', { name: 'Diagnosis Code', exact: true }).click();
// Generate random diagnosis code like: "Test-742"
const randomDiagnosisCode = `Test-${Math.floor(Math.random() * 1000)}`;
await page.getByRole('textbox', { name: 'Diagnosis Code', exact: true }).fill(randomDiagnosisCode);
console.log(`Diagnosis Code entered: ${randomDiagnosisCode}`);
 await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).click();
 await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).fill('Test Diagnosis Code Description');
 await page.getByRole('combobox', { name: 'Active' }).click();
 await page.getByRole('option', { name: 'Active', exact: true }).click();
 await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
 await page.getByRole('button', { name: 'Save & Close' }).click();
 await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).click();
 await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).fill('Test Diagnosis Code Description');
 await page.getByRole('combobox', { name: 'Select Speciality' }).click();
 await page.click("(//*[@role='option'])[1]");

 await page.getByRole('combobox', { name: 'Enter Select' }).first().click();
  await page.click("(//*[@role='option'])[1]");

  
  await page.getByRole('textbox', { name: 'CPT Code Description' }).click();
  await page.getByRole('textbox', { name: 'CPT Code Description' }).fill('Office or other outpatient visit for the evaluation and management of an established patient, typically 15 minutes');
  await page.getByPlaceholder('MUE Limit').click();
  await page.getByPlaceholder('MUE Limit').fill('25');
  await page.getByRole('combobox', { name: 'Select Billing Frequency' }).click();
  await page.getByRole('option', { name: 'Per Week' }).click();
  await page.getByRole('combobox', { name: 'Enter Select' }).click();
  await page.getByRole('option', { name: '2 Units' }).click();
  await page.getByRole('combobox', { name: 'Select Unit Type' }).click();
  await page.getByRole('option', { name: '30 Minutes' }).click();
  await page.getByRole('combobox', { name: 'Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-multiline').click();
  await page.getByRole('textbox', { name: 'Enter Text Area' }).fill('Testing');
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Created successfully.')).toBeVisible();


  //Edit

  await page.locator("(//button[@class='p-1 text-blue-600 hover:text-blue-800'])[1]").click();
  await page.getByRole('combobox', { name: 'Units' }).click();
  await page.getByRole('option', { name: '3 Units' }).click();
  await page.getByRole('combobox', { name: 'Minutes' }).click();
  await page.getByRole('option', { name: '15 Minutes' }).click();
  await page.getByPlaceholder('MUE Limit').click();
  await page.getByPlaceholder('MUE Limit').fill('45');
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Updated successfully.')).toBeVisible();

  //Delete
  await page.locator("(//button[@aria-label='Delete undefined'])[1]").click();
  await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('CPT Dictionary deleted')).toBeVisible();


});