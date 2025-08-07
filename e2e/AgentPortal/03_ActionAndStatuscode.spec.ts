import { test } from '@playwright/test';
import { navigateToLoginPage, loginWithMicrosoft, approveSignInRequest, verifyDashboard, loginWithInvalidCredentials, verifySignInFailure } from '../../utils/AgentPortal_utils/authUtils';

const validEmail = 'gp2_test@twilightitsolutions.com';
const validPassword = 'SmartWork@1234';

test.describe('Login Tests', () => {

// Login
test('Verify Action and status code', async ({ page }) => {
  await navigateToLoginPage(page);
  await loginWithMicrosoft(page, validEmail, validPassword);
  await approveSignInRequest(page);
  await verifyDashboard(page);

await page.locator('div').filter({ hasText: 'Masters' }).nth(3).click();

await page.getByRole('link', { name: 'provider CPT Dictionary' }).click();
await page.getByRole('button', { name: 'Add New CPT Dictionary' }).click();
await page.locator('[id="«rd»"]').click();
await page.getByRole('option', { name: 'Test-03' }).click();
await page.locator('[id="«rf»"]').click();
await page.getByRole('button', { name: 'Add Diagnosis Code' }).click();
await page.getByRole('combobox').first().click();
await page.getByRole('option', { name: 'Test-03' }).click();
await page.getByRole('textbox', { name: 'Diagnosis Code', exact: true }).click();
await page.getByRole('textbox', { name: 'Diagnosis Code', exact: true }).fill('03');
await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).click();
await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).fill('Diagnosis Code Description');
await page.locator('form').filter({ hasText: 'Add Diagnosis CodeICDTest-' }).getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Active', exact: true }).click();
await page.getByRole('button', { name: 'Save & Close' }).click();
await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).click();
await page.getByRole('textbox', { name: 'Diagnosis Code Description' }).fill('Test Code');
await page.locator('[id="«rj»"]').click();
await page.getByRole('option', { name: 'Speciality-001' }).click();
await page.getByLabel('', { exact: true }).first().click();
await page.getByRole('button', { name: 'Add CPT Code' }).click();
await page.getByRole('textbox', { name: 'CPT', exact: true }).click();
await page.getByRole('textbox', { name: 'CPT', exact: true }).fill('Test');
await page.getByRole('textbox', { name: 'CPT Code Description' }).click();
await page.getByRole('textbox', { name: 'CPT Code Description' }).fill('032');
await page.getByRole('combobox').first().click();
await page.getByRole('option', { name: 'Active', exact: true }).click();
await page.locator('form').filter({ hasText: 'Add CPTCPTCPT Code' }).getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Speciality-002' }).click();
await page.getByRole('button', { name: 'Save & Close' }).click();
await page.getByRole('textbox', { name: 'CPT Code Description' }).click();
await page.getByRole('textbox', { name: 'CPT Code Description' }).fill('45');
await page.getByPlaceholder('MUE Limit').click();
await page.getByPlaceholder('MUE Limit').fill('43');
await page.getByLabel('', { exact: true }).nth(1).click();
await page.getByRole('option', { name: 'Per Week' }).click();
await page.getByLabel('', { exact: true }).nth(1).click();
await page.getByRole('option', { name: '2 Units' }).click();
await page.getByLabel('', { exact: true }).nth(1).click();
await page.getByRole('option', { name: '60 Minutes' }).click();
await page.getByLabel('', { exact: true }).nth(1).click();
await page.getByRole('option', { name: 'Active', exact: true }).click();
await page.getByRole('textbox', { name: 'Enter Text Area' }).click();
await page.getByRole('textbox', { name: 'Enter Text Area' }).fill('Test');
await page.getByRole('button', { name: 'Save & Close' }).click();
// await expect(page.locator('div').filter({ hasText: 'SuccessCreated successfully.' }).nth(2)).toBeVisible();

});
});