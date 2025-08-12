import { test, expect } from '@playwright/test';
import { loginAndNavigateToProcessSettings } from 'utils/AgentPortal_utils/organization-utils';
import { navigateToLoginPage } from 'utils/AgentPortal_utils/authUtils';


test.describe('Process Settings', () => {

test.beforeEach(async ({ page }) => {
  await loginAndNavigateToProcessSettings(page);
});

test('01_Process Settings positive flow add', async ({ page }) => {

  await expect(page.getByRole('button', { name: 'Role Assignment' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Roles Assignment – OperationAdd$/ }).getByRole('button').click();

  await page.getByRole('combobox', { name: 'Select User' }).first().click();
  await page.getByRole('cell', { name: 'Close' }).getByPlaceholder('Select User').fill('ma');
  await page.getByRole('option', { name: 'Manager (E-01)' }).click();
  await page.getByRole('combobox', { name: 'Select User' }).nth(1).click();
  await page.getByRole('option', { name: 'Supervisor (E-02)' }).click();
  await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
  await page.getByRole('option', { name: 'Agent (E-03)' }).click();
  await page.getByRole('cell').filter({ hasText: /^$/ }).getByRole('button').first().click();
  await expect(page.getByText('Created successfully.')).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Manager (E-01)' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Supervisor (E-02)' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Agent (E-03)' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Roles Assignment – AuditAdd$/ }).getByRole('button').click();
    await page.getByRole('combobox', { name: 'Select User' }).first().click();
  await page.getByRole('option', { name: 'QC Manager (E-06)' }).click();
  await page.getByRole('combobox', { name: 'Select User' }).nth(1).click();
  await page.getByRole('option', { name: 'QC Supervisor (E-07)' }).click();
  await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
  await page.getByRole('option', { name: 'QC Agent (E-08)' }).click();
  await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary').click();
  await expect(page.getByRole('cell', { name: 'QC Manager (E-06)' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'QC Supervisor (E-07)' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'QC Agent (E-08)' })).toBeVisible();

})

test('02_Verify that same user cannot be Manager and Supervisor in the same process – system must block this conflicting assignment.', async ({ page }) => {
await page.locator('div').filter({ hasText: /^Roles Assignment – OperationAdd$/ }).getByRole('button').click();
await page.getByRole('button', { name: 'Open' }).first().click();
await page.getByRole('option', { name: 'Manager (E-01)' }).click();
await page.locator('td:nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
await page.getByRole('option', { name: 'Manager (E-01)' }).click();
await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
await page.getByRole('option', { name: 'Viknesh (AK74)' }).click();
await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary').click();
await expect(page.getByText('Manager, Supervisor, and')).toBeVisible();
await page.getByRole('row', { name: 'Manager (E-01) Open Manager (' }).getByRole('button').nth(4).click();
})

test('03_Verify that same user can be assigned as Manager and Supervisor multiple times if business rule allows duplicate Manager and Supervisor assignments.', async ({ page }) => {

await page.locator('div').filter({ hasText: /^Roles Assignment – OperationAdd$/ }).getByRole('button').click();
await page.getByRole('combobox', { name: 'Select User' }).first().click();
await page.getByRole('option', { name: 'Manager (E-01)' }).click();
await page.getByRole('combobox', { name: 'Select User' }).nth(1).click();
await page.getByRole('option', { name: 'Supervisor (E-02)' }).click();
await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
await page.getByRole('option', { name: 'Viknesh (AK74)' }).click();
await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary').click();
await expect(page.getByText('Created successfully.')).toBeVisible();

})

test('04_Verify that same user cannot be assigned as Agent multiple times – ensure duplicate Agent assignment is blocked.', async ({ page }) => {

await page.locator('div').filter({ hasText: /^Roles Assignment – OperationAdd$/ }).getByRole('button').click();
await page.getByRole('combobox', { name: 'Select User' }).first().click();
await page.getByRole('option', { name: 'Manager (E-01)' }).click();
await page.getByRole('combobox', { name: 'Select User' }).nth(1).click();
await page.getByRole('option', { name: 'Supervisor (E-02)' }).click();
await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
await page.getByRole('option', { name: 'Agent (E-03)' }).click();
await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary').click();
await expect(page.getByText('User is already assigned as')).toBeVisible();
await page.getByRole('row', { name: 'Manager (E-01) Open' }).getByRole('button').nth(4).click();
})

test('05_Prevent Supervisor from being assigned to multiple Managers in Operations – verify if supervisor linkage is exclusive.', async ({ page }) => {

await page.locator('div').filter({ hasText: /^Roles Assignment – OperationAdd$/ }).getByRole('button').click();
await page.getByRole('combobox', { name: 'Select User' }).first().click();
await page.getByRole('option', { name: 'kamesh (A76)' }).click();
await page.getByRole('combobox', { name: 'Select User' }).nth(1).click();
await page.getByRole('option', { name: 'Supervisor (E-02)' }).click();
await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
await page.getByRole('option', { name: 'Vasantht (A54)' }).click();
await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary').click();
await expect(page.getByText('This supervisor is already')).toBeVisible();
await page.getByRole('row', { name: 'kamesh (A76) Open Supervisor' }).getByRole('button').nth(4).click();
})

test('06_Verify that Agent cannot be duplicated across Operations and Audit categories if cross-category duplication is restricted.', async ({ page }) => {

await expect(page.getByRole('heading', { name: 'Roles Assignment – Audit' })).toBeVisible();
await page.locator('div').filter({ hasText: /^Roles Assignment – AuditAdd$/ }).getByRole('button').click();
await page.getByRole('combobox', { name: 'Select User' }).first().click();
await page.getByRole('option', { name: 'QC Manager (E-06)' }).click();
await page.getByRole('combobox', { name: 'Select User' }).nth(1).click();
await page.getByRole('option', { name: 'QC Supervisor (E-07)' }).click();
await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
await page.getByRole('option', { name: 'Agent (E-03)' }).click();
await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary').click();
await expect(page.getByText('User is already assigned in')).toBeVisible();
await page.getByRole('row', { name: 'QC Manager (E-06) Open QC' }).getByRole('button').nth(4).click();
})

test('07_Attempt to assign same user as Manager, Supervisor in Operations and as QcManager, QcSupervisor in Audit – check cross-process assignment restriction.', async ({ page }) => {
await page.locator('div').filter({ hasText: /^Roles Assignment – AuditAdd$/ }).getByRole('button').click();
await page.getByRole('combobox', { name: 'Select User' }).first().click();
await page.getByRole('option', { name: 'Manager (E-01)' }).click();
await page.getByRole('combobox', { name: 'Select User' }).nth(1).click();
await page.getByRole('option', { name: 'Supervisor (E-02)' }).click();
await page.getByRole('cell', { name: 'Open', exact: true }).getByPlaceholder('Select User').click();
await page.getByRole('option', { name: 'Vasantht (A54)' }).click();
await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary').click();
await expect(page.getByText('User is already assigned in')).toBeVisible();
await page.getByRole('row', { name: 'Manager (E-01) Open' }).getByRole('button').nth(4).click();
})


test('08_Verify logged in person should not delete his/her own Role in Process Settings', async ({ page }) => {

    await page.getByText('⋮').click();
    await page.getByRole('button', { name: 'Logout' }).click();
    await page.locator('[data-test-id="asprcmtesting1@twilightitsolutions.com"]').click();

    await navigateToLoginPage(page);
    await page.getByRole('button', { name: 'Login with Microsoft' }).click();
    await page.getByRole('button', { name: 'Use another account' }).click();
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('asprcmtesting4@twilightitsolutions.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#i0118').fill('SmartWork@123');
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('combobox', { name: 'Organization', exact: true }).click();
    await page.getByRole('option', { name: 'Acme Technologies Pvt. Ltd.' }).click();
    await page.getByRole('combobox', { name: 'Sub-Organization' }).click();
    await page.getByRole('option', { name: 'MedCare Health Services' }).click();
    await page.getByRole('combobox', { name: 'Process' }).click();
    await page.getByRole('option', { name: 'Provider Credentialing' }).click();

    await page.getByLabel('Organizations').getByText('Organizations').click();
  await page.getByRole('row', { name: 'Sunrise Health Systems' }).getByRole('button').first().click();
  await page.getByRole('link', { name: 'Sub Organization List' }).click();
  await page.getByRole('cell', { name: 'Delete undefined' }).getByRole('button').first().click();
  await expect(page.getByRole('link', { name: 'Process Settings' })).toBeVisible();
  await page.getByRole('link', { name: 'Process Settings' }).click();
  await page.getByRole('row', { name: 'Manager (E-01) Supervisor (E-' }).getByRole('button').click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();


  await page.getByRole('row', { name: 'Manager (E-01) Supervisor (E-' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Delete' }).click();
})


})