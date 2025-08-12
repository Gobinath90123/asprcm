// organization-utils.ts
import { Page, expect } from '@playwright/test';
import logger from '../logger';

export async function navigateToOrganizations(page: Page) {
  logger.info('Navigating to Organizations section');
  await expect(page.getByText('Organizations')).toBeVisible();
  await page.getByText('Organizations').click();
  await expect(page.getByRole('button', { name: 'Add New Organizations' })).toBeVisible();
}

export async function openAddOrganizationForm(page: Page) {
  logger.info('Opening Add New Organization form');
  await page.getByRole('button', { name: 'Add New Organizations' }).click();
  await expect(page.getByRole('heading', { name: 'Basic Information' })).toBeVisible();
}

const firstNames = ['john', 'emma', 'michael', 'sarah', 'david', 'linda', 'james', 'olivia', 'daniel', 'sophia'];
const lastNames = ['doe', 'smith', 'johnson', 'brown', 'williams', 'taylor', 'lee', 'martin', 'clark', 'hall'];

export function generateRandomEmail(domain = 'yopmail.com') {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  const suffix = Math.floor(Math.random() * 10000);
  const email = `${first}.${last}${suffix}@${domain}`;
  logger.debug(`Generated random email: ${email}`);
  return email;
}

export async function fillBasicInfo(page: Page, org: any) {
  logger.info('Filling basic organization info');

  if (org.clientName) {
    logger.debug(`Client Name: ${org.clientName}`);
    await page.getByRole('textbox', { name: 'Enter client name' }).fill(org.clientName);
  }

  if (org.businessName) {
    logger.debug(`Business Name: ${org.businessName}`);
    await page.getByRole('textbox', { name: 'Enter legal business name' }).fill(org.businessName);
  }

  // if (org.onboardDate)
  //   await page.getByPlaceholder('Select Client Onboard Date').fill(org.onboardDate);

  if (org.clientId)
    await page.getByRole('textbox', { name: 'Enter unique client ID' }).fill(org.clientId);

  if (org.email)
    await page.getByRole('textbox', { name: 'Enter official email' }).fill(org.email);

  if (org.phone)
    await page.getByRole('textbox', { name: 'Enter phone number' }).fill(org.phone);

  if (org.fax)
    await page.getByRole('textbox', { name: 'Enter fax number (optional)' }).fill(org.fax);

  if (org.address)
    await page.getByRole('textbox', { name: 'Enter address line 1' }).fill(org.address);

  // if (org.city) {
  //   await page.getByLabel('').nth(2).click();
  //   const cityOption = page.getByRole('option', { name: org.city });
  //   await cityOption.waitFor({ state: 'visible', timeout: 5000 });
  //   await cityOption.click();
  // }

  // if (org.state)
  //   await page.getByRole('textbox', { name: 'Enter State/Province' }).fill(org.state);

  // if (org.zip)
  //   await page.getByPlaceholder('Enter Zip/Postal Code').fill(org.zip);

  // if (org.county) {
  //   await page.getByLabel('', { exact: true }).click();
  //   const countyOption = page.getByRole('option', { name: org.county });
  //   await countyOption.waitFor({ state: 'visible', timeout: 5000 });
  //   await countyOption.click();
  // }

  // if (org.country)
  //   await page.getByRole('textbox', { name: 'Enter Country' }).fill(org.country);
}

export async function fillContactPerson(page: Page, person: any) {
  logger.info(`Filling contact person: ${person.name}`);
  await page.getByRole('button', { name: 'Add Row' }).click();
  await expect(page.getByRole('heading', { name: 'Point of Contact' })).toBeVisible();
   await page.getByRole('textbox', { name: 'Enter Name' }).fill(person.name);
  await page.getByRole('textbox', { name: 'Enter Email ID' }).fill(person.email);
  await page.getByPlaceholder('Enter Mobile Phone').fill(person.phone);
  await page.getByRole('textbox', { name: 'Enter Is Primary' }).fill(person.status);
}

export async function saveAndCloseOrganization(page: Page) {
  logger.info('Saving and closing organization');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
}

export async function verifyOrganizationInTable(page: Page, uniqueEmail: string) {
  logger.info(`Verifying organization appears in the table: ${uniqueEmail}`);
  await expect(page.getByText(uniqueEmail)).toBeVisible();
  
}

export async function clickEditButtonForEmail(page: Page, email: string) {
  logger.info(`Editing organization with email: ${email}`);
  const row = page.getByRole('row', { name: new RegExp(email) });
  await expect(row).toBeVisible();
  await row.getByRole('button').first().click();
}

export async function deleteClientByEmail(page: Page, email: string) {
  logger.info(`Deleting organization with email: ${email}`);
  
  await page.getByText('Organizations').click();
  const row = page.getByRole('row', { name: new RegExp(email) });
  await expect(row).toBeVisible();

  // Click the delete button (assumes Delete button has accessible label or is the second button)
  await row.getByRole('button').nth(1).click(); // adjust nth() if needed

  // Confirm delete dialog appears
  await expect(page.getByText(/are you sure you want to/i)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();

  // Confirm the deletion
  await page.getByRole('button', { name: 'Delete' }).click();

  // Verify the success toast or message
  await expect(page.getByText(/Client deleted successfully/i)).toBeVisible();
}

export async function navigateAndAddSubOrganization(page: Page) {
  await page.getByText('Organizations').click();
  await page.getByRole('cell', { name: 'Client Email↑' }).getByRole('textbox').click();
  await page.getByRole('cell', { name: 'Client Email↑' }).getByRole('textbox').fill('client8');
  await page.getByRole('row', { name: 'Client 8 Client 8 client8@' }).getByRole('button').first().click();
  await expect(page.getByRole('link', { name: 'Sub Organization List' })).toBeVisible();
  await page.getByRole('link', { name: 'Sub Organization List' }).click();
  await expect(page.getByText('Sub Organizations', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Add New Sub Organizations' }).click();
}

export async function loginAndNavigateToProcessSettings(page: Page) {
  logger.info('Logging in and navigating to Process Settings');
  
  await page.goto('https://devrcmgenie.asprcmsolutions.com/');
  await page.getByRole('button', { name: 'Login with Microsoft' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('asprcmtesting1@twilightitsolutions.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('SmartWork@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('combobox', { name: 'Organization', exact: true }).click();
  await page.getByRole('option', { name: 'Acme Technologies Pvt. Ltd.' }).click();
  await page.getByRole('combobox', { name: 'Sub-Organization' }).click();
  await page.getByRole('option', { name: 'MedCare Health Services' }).click();
  await page.getByRole('combobox', { name: 'Process' }).click();
  await page.getByRole('option', { name: 'Provider Credentialing' }).click();
  await page.getByRole('combobox', { name: 'Process' }).nth(1).click();
  await page.getByRole('option', { name: 'Operation' }).click();
  await page.getByLabel('Organizations').getByText('Organizations').click();
  await page.getByRole('row', { name: 'Sunrise Health Systems' }).getByRole('button').first().click();
  await page.getByRole('link', { name: 'Sub Organization List' }).click();
  await page.getByRole('cell', { name: 'Delete undefined' }).getByRole('button').first().click();
  await expect(page.getByRole('link', { name: 'Process Settings' })).toBeVisible();
  await page.getByRole('link', { name: 'Process Settings' }).click();
}


