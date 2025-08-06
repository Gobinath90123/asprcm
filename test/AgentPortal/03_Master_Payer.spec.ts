import { test, expect } from '@playwright/test';
import { navigateToLoginPage, loginWithMicrosoft, approveSignInRequest, verifyTicketsModule } from '../../utils/AgentPortal_utils/authUtils';
import { authConfig } from '../../utils/AgentPortal_utils/config';

test.describe('Payor Tests', () => {

  test('Payor CRUD', async ({ page }) => {

 await navigateToLoginPage(page);
    await loginWithMicrosoft(page, authConfig.email, authConfig.password);
    await approveSignInRequest(page);
    await verifyTicketsModule(page);

await page.getByLabel('Masters').getByText('Masters').click();
  await expect(page.getByText('Payer Add New Payer')).toBeVisible();
await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add New Payer' }).click();
  await page.getByRole('textbox', { name: 'Payer Name' }).click();
  await page.getByRole('textbox', { name: 'Payer Name' }).fill('Max life Insurance');
  await page.getByRole('textbox', { name: 'Payer Type' }).click();
  await page.getByRole('textbox', { name: 'Payer Type' }).fill('Insurance');
  await page.getByText('Select Claim Submission Method').click();
  await page.getByRole('option', { name: 'EDI A' }).click();
  await page.locator('div').filter({ hasText: /^LocationAdd Row$/ }).getByRole('button').click();

  await expect(page.getByRole('heading', { name: 'Location' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter Payer Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Payer Name' }).fill('Cigna Health');

  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Texas' }).click();
  await page.getByRole('textbox', { name: 'Enter Website' }).click();
  await page.getByRole('textbox', { name: 'Enter Website' }).fill('https://www.cigna.com');
  await page.getByRole('textbox', { name: 'Enter Contact Number' }).fill('(800) 997-1654');
  await page.getByRole('textbox', { name: 'Enter Process' }).fill('(800) 997-1654');
  await page.getByRole('textbox', { name: 'Enter Process' }).fill('Claims');
  await page.getByRole('textbox', { name: 'Enter Contact Email' }).fill('support@cigna.com');

  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^Appeal TimelinesAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Denial Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Denial Type' }).fill('Prior Authorization');
  await page.getByRole('textbox', { name: 'Enter Typical Appeal Window' }).click();
  await page.getByRole('textbox', { name: 'Enter Typical Appeal Window' }).fill('30 days');
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Texas' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^CredentialingAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Specialty' }).click();
  await page.getByRole('textbox', { name: 'Enter Specialty' }).fill('Cardiology');
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Texas' }).click();
  await page.getByRole('textbox', { name: 'Enter Link' }).click();

  await page.getByRole('textbox', { name: 'Enter Link' }).fill('https://cigna.com/credentialing');


  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^Manual FormsAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Type' }).fill('Claim Form');
  await page.getByRole('textbox', { name: 'Enter Version', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter Version', exact: true }).fill('1.0');
  await page.getByRole('textbox', { name: 'Enter Document' }).click();
  await page.getByRole('textbox', { name: 'Enter Document' }).fill('claim_form_v1.pdf');
  await page.getByPlaceholder('Enter Created Date').fill('2025-08-31');
  await page.getByRole('textbox', { name: 'Enter Version History' }).click();
  await page.getByRole('textbox', { name: 'Enter Version History' }).fill('Initial Release');
  await page.getByRole('textbox', { name: 'Enter Specialty' }).click();
  await page.getByRole('textbox', { name: 'Enter Specialty' }).fill('General');
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Texas' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Created successfully.')).toBeVisible();

//edit
await expect(page.getByRole('row', { name: 'Cigna Health Insurance EDI A' }).getByRole('button').first()).toBeVisible();
await page.getByRole('row', { name: 'Cigna Health Insurance EDI A' }).getByRole('button').first().click();
await expect(page.getByRole('heading', { name: 'Basic Information' })).toBeVisible();

await page.getByRole('textbox', { name: 'Payer Name' }).click();
await page.getByRole('textbox', { name: 'Payer Name' }).press('ControlOrMeta+a');
await page.getByRole('textbox', { name: 'Payer Name' }).fill('United Healthcare');
await page.getByRole('textbox', { name: 'Payer Type' }).fill('Insurance Type');
await page.getByRole('combobox', { name: 'EDI A' }).click();
await page.getByRole('option', { name: 'EDI B' }).click();
await page.locator('div').filter({ hasText: /^LocationAdd Row$/ }).getByRole('button').click();
await page.getByRole('textbox', { name: 'Enter Payer Name' }).fill('United Healthcare');
await page.getByRole('combobox', { name: 'Select State' }).click();
await page.getByRole('option', { name: 'California' }).click();
await page.getByRole('textbox', { name: 'Enter Website' }).fill('https://www.uhc.com');
await page.getByRole('textbox', { name: 'Enter Contact Number' }).fill('(888) 123-4567');
await page.getByRole('textbox', { name: 'Enter Process' }).fill('Eligibility');
await page.getByRole('textbox', { name: 'Enter Contact Email' }).fill('providerhelp@uhc.com');


await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByRole('cell', { name: 'United Healthcare' })).toBeVisible();
await page.getByRole('button', { name: 'Save & Close' }).click();

//delete

await expect(page.getByRole('row', { name: 'United Healthcare Insurance' }).getByLabel('Delete undefined')).toBeVisible();
await page.getByRole('row', { name: 'United Healthcare Insurance' }).getByLabel('Delete undefined').click();
await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
await page.getByRole('button', { name: 'Delete' }).click();
await page.getByRole('button').filter({ hasText: /^$/ }).click();

  });

});