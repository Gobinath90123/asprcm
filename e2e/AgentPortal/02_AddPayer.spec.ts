import { test } from '@playwright/test';
import { navigateToLoginPage, loginWithMicrosoft, approveSignInRequest, verifyDashboard, loginWithInvalidCredentials, verifySignInFailure } from '../../utils/AgentPortal_utils/authUtils';

const validEmail = 'gp2_test@twilightitsolutions.com';
const validPassword = 'SmartWork@1234';

test.describe('Login Tests', () => {

// Positive Test Case
test('Verify successful login with registered Microsoft account', async ({ page }) => {
  await navigateToLoginPage(page);
  await loginWithMicrosoft(page, validEmail, validPassword);
  await approveSignInRequest(page);
  await verifyDashboard(page);

  await page.getByText('Masters').click();
  await page.getByRole('button', { name: 'Add New Payer' }).click();
  await page.getByRole('textbox', { name: 'Payer Name' }).click();
  await page.getByRole('textbox', { name: 'Payer Name' }).fill('Test Payer');
  await page.getByRole('textbox', { name: 'Payer Type' }).click();
  await page.getByRole('textbox', { name: 'Payer Type' }).fill('Test Type');
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'EDI A' }).click();
  await page.locator('div').filter({ hasText: /^LocationAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Payer Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Payer Name' }).fill('Beckum');
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Alaska' }).click();
  await page.getByRole('textbox', { name: 'Enter Website' }).click();
  await page.getByRole('textbox', { name: 'Enter Website' }).fill('www.asprcm.com');
  await page.getByRole('textbox', { name: 'Enter Contact Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Contact Number' }).fill('869857485');
  await page.getByRole('textbox', { name: 'Enter Process Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Process Type' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter Contact Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Contact Email' }).fill('beckum@yopmail.com');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^Appeal TimelinesAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Denial Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Denial Type' }).fill('Test Denial');
  await page.getByRole('textbox', { name: 'Enter Typical Appeal Window' }).click();
  await page.getByRole('textbox', { name: 'Enter Typical Appeal Window' }).fill('Test Appeal');
  await page.getByRole('textbox', { name: 'Enter State' }).click();
  await page.getByRole('textbox', { name: 'Enter State' }).fill('Alaska');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^Appeal TimelinesAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Denial Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Denial Type' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter Typical Appeal Window' }).click();
  await page.getByRole('textbox', { name: 'Enter Typical Appeal Window' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter State' }).click();
  await page.getByRole('textbox', { name: 'Enter State' }).fill('Manama');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^CredentialingAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Specialty' }).click();
  await page.getByRole('textbox', { name: 'Enter Specialty' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter State' }).click();
  await page.getByRole('textbox', { name: 'Enter State' }).fill('Texas');
  await page.getByRole('textbox', { name: 'Enter Link' }).click();
  await page.getByRole('textbox', { name: 'Enter Link' }).fill('www.google.com');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^Manual FormsAdd Row$/ }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter Type' }).click();
  await page.getByRole('textbox', { name: 'Enter Type' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter Version', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter Version', exact: true }).fill('V.01');
  await page.getByRole('textbox', { name: 'Enter Document' }).click();
  await page.getByRole('textbox', { name: 'Enter Document' }).fill('Test');
  await page.getByPlaceholder('Enter Created Date').fill('2025-07-14');
  await page.getByRole('textbox', { name: 'Enter Version History' }).click();
  await page.getByRole('textbox', { name: 'Enter Version History' }).fill('Nil');
  await page.getByRole('textbox', { name: 'Enter Specialty' }).click();
  await page.getByRole('textbox', { name: 'Enter Specialty' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter State' }).click();
  await page.getByRole('textbox', { name: 'Enter State' }).fill('New York');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();

});

});

