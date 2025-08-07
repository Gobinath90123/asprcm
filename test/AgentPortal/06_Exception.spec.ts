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
  await page.getByRole('option', { name: 'Twilight Information' }).click();
  await page.getByRole('combobox', { name: 'Sub-Organization' }).click();
  await page.getByRole('option', { name: 'AppXperts Medical Group, LLC' }).click();
  await page.getByRole('combobox', { name: 'Process' }).click();
  await page.getByRole('option', { name: 'Provider Credentialing' }).click();
  await page.getByLabel('Masters').click();
  await expect(page.getByRole('link', { name: 'provider Exception' })).toBeVisible();
  await page.getByRole('link', { name: 'provider Exception' }).click();
  await expect(page.getByText('Exception Add New Exception')).toBeVisible();
  await page.getByRole('button', { name: 'Add New Exception' }).click();
  await expect(page.getByRole('heading', { name: 'Add Exception Type' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Select Process' }).click();
  await page.getByRole('option', { name: 'Prior Auth' }).click();
  await page.getByRole('textbox', { name: 'Exception' }).click();
  await page.getByRole('textbox', { name: 'Exception' }).fill('Prior Exception');
  await page.getByRole('combobox', { name: 'Select Document Required' }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByPlaceholder('Follow Up (In Days)').click();
  await page.getByPlaceholder('Follow Up (In Days)').fill('15');
  await page.getByRole('combobox', { name: 'Active' }).click();
  await page.getByRole('option', { name: 'Active', exact: true }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Created successfully.')).toBeVisible();




  //Edit
  
  await expect(page.locator('.p-1').first()).toBeVisible();
  await page.locator('.p-1').first().click();
  await page.getByRole('textbox', { name: 'Exception' }).click();
  await page.getByRole('textbox', { name: 'Exception' }).fill('Prior Exception Test');
  await page.getByPlaceholder('Follow Up (In Days)').click();
  await page.getByPlaceholder('Follow Up (In Days)').fill('18');
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await expect(page.getByText('Updated successfully.')).toBeVisible();
  await page.waitForTimeout(4000);


  //Delete

 await expect(page.getByRole('row', { name: 'Prior Auth Prior Exception' }).getByLabel('Delete undefined')).toBeVisible();
 await page.getByRole('row', { name: 'Prior Auth Prior Exception' }).getByLabel('Delete undefined').click();
 await expect(page.locator('div').filter({ hasText: /^Delete$/ })).toBeVisible();
 await page.getByRole('button', { name: 'Delete' }).click();
 await expect(page.getByText('Exception Type deleted')).toBeVisible();

});