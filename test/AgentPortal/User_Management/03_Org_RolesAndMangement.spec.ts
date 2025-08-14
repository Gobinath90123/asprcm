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
  await expect(page.getByText('User Management')).toBeVisible();
  await page.getByLabel('User Management').click();
  await expect(page.getByRole('link', { name: 'orgRolesIcon Org Roles and' })).toBeVisible();
  await page.getByRole('link', { name: 'orgRolesIcon Org Roles and' }).click();


  //Add
  await expect(page.getByRole('button', { name: 'Add New Org Roles and' })).toBeVisible();
  await page.getByRole('button', { name: 'Add New Org Roles and' }).click();
  await expect(page.getByRole('heading', { name: 'Org Roles and Management' })).toBeVisible();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Supervisor');
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'Main Organisation' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Success')).toBeVisible();
  await page.waitForTimeout(7000);


  //Edit

  await expect(page.getByRole('row', { name: 'Supervisor MAIN ORGANISATION' }).getByRole('button').first()).toBeVisible();
  await page.getByRole('row', { name: 'Supervisor MAIN ORGANISATION' }).getByRole('button').first().click();
  await expect(page.getByRole('button', { name: 'Organization' }).getByRole('checkbox')).toBeVisible();
  await page.getByRole('button', { name: 'Organization' }).getByRole('checkbox').uncheck();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Permissions Updated')).toBeVisible();
  await page.waitForTimeout(7000);


  //Delete

  await expect(page.getByRole('row', { name: 'Supervisor MAIN ORGANISATION' }).getByLabel('Delete undefined')).toBeVisible();
  await page.getByRole('row', { name: 'Supervisor MAIN ORGANISATION' }).getByLabel('Delete undefined').click();
  await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('Organization Roles deleted')).toBeVisible();
});