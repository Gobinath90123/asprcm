import { test, expect } from '@playwright/test';
import { loginWithMicrosoftAccount } from 'utils/AgentPortal_utils/authUtils';


test('Source', async ({ page }) => {

    await test.step('Login and navigate to organizations', async () => {
        await loginWithMicrosoftAccount(page);
    });

await expect(page.getByText('Tickets List')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Source' })).toBeVisible();
  await page.getByRole('button', { name: 'Source' }).click();
  await expect(page.getByText('Source List')).toBeVisible();
  await expect(page.getByText('Records Found')).toBeVisible();
  await page.locator("(//*[normalize-space(text())='View & Allocate'])[1]").click();
await expect(page.getByRole('heading', { name: 'Ticket Details' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Basic Fields' })).toBeVisible();
await expect(page.getByText('Ticket Type')).toBeVisible();
await expect(page.locator('span').filter({ hasText: 'Priority' })).toBeVisible();
await expect(page.getByText('Status')).toBeVisible();
await expect(page.getByText('Subject')).toBeVisible();
await expect(page.locator('span').filter({ hasText: 'Description' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Process Fields' })).toBeVisible();
await expect(page.getByText('Enrollement Type')).toBeVisible();
await expect(page.getByText('Job Request')).toBeVisible();
await expect(page.getByText('Provider NPI')).toBeVisible();
await expect(page.getByText('Payor Name')).toBeVisible();
await page.locator("//*[contains(normalize-space(.), 'State')]");
await expect(page.locator('span').filter({ hasText: 'Attachment' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Communication Log' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Reply' })).toBeVisible();
await page.getByRole('textbox', { name: 'Type here something....' }).click();
await page.getByRole('textbox', { name: 'Type here something....' }).fill('Hello');
await expect(page.getByRole('button', { name: 'Send' })).toBeVisible();
await page.getByRole('button', { name: 'Send' }).click();
await expect(page.getByText('TICKET Sent Successfully')).toBeVisible();
await expect(page.getByText('Hello')).toBeVisible();
await expect(page.getByRole('button', { name: 'Ready for Allocation' })).toBeVisible();
await page.getByRole('button', { name: 'Ready for Allocation' }).click();
})