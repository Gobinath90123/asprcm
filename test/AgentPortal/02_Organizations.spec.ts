  import { test, expect } from '@playwright/test';
import {
  navigateToOrganizations,
  openAddOrganizationForm,
  generateRandomEmail,
  fillBasicInfo,
  fillContactPerson,
  saveAndCloseOrganization,
  verifyOrganizationInTable, 
  clickEditButtonForEmail,
  deleteClientByEmail
} from '../../utils/AgentPortal_utils/organization-utils';
import { loginWithMicrosoftAccount } from 'utils/AgentPortal_utils/authUtils';

test.describe('Organization Management', () => {


test('Organizations - Add, Edit, Delete Point of Contact, Delete Organization', async ({ page }) => {
  
   await test.step('Login and navigate to organizations', async () => {
      await loginWithMicrosoftAccount(page);
    });

  await test.step('Navigate to Organizations and open Add New form', async () => {
    await page.getByLabel('Organizations').getByText('Organizations').click();
    await expect(page.getByText('Organizations Add New')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add New Organizations' })).toBeVisible();
    await page.getByRole('button', { name: 'Add New Organizations' }).click();
    await expect(page.getByRole('heading', { name: 'Basic Information' })).toBeVisible();
  });

  await test.step('Fill Basic Information and save organization', async () => {
    await page.getByRole('textbox', { name: 'Enter client name' }).fill('Sunrise Dental Care');
    await page.getByRole('textbox', { name: 'Enter legal business name' }).fill('Sunrise Dental Professionals, Inc.');
    await page.getByPlaceholder('Select onboarding date').fill('2025-08-31');
    await page.getByRole('textbox', { name: 'Enter unique client ID' }).fill('SDC-0825-003');
    await page.getByRole('textbox', { name: 'Enter official email' }).fill('contact@sunrisedental.com');
    await page.getByRole('textbox', { name: 'Enter phone number' }).fill('+1 (305) 555-6732');
    await page.getByRole('textbox', { name: 'Enter fax number (optional)' }).fill('+1 (305) 555-6733');
    await page.getByRole('textbox', { name: 'Enter address line 1' }).fill('780 Ocean Drive');
    await page.getByRole('textbox', { name: 'Enter address line 2 (' }).fill('Floor 3');
    await page.getByRole('combobox', { name: 'Select Country' }).click();
    await page.getByRole('option', { name: 'USA' }).click();
    await page.getByRole('combobox', { name: 'Select County' }).click();
    await page.getByRole('option', { name: 'New York' }).click();
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('option', { name: 'Florida' }).click();
    await page.getByRole('combobox', { name: 'Select City' }).click();
    await page.getByRole('option', { name: 'Middleburg' }).click();
    await page.getByRole('textbox', { name: 'Enter ZIP or postal code' }).fill('33139');

    // Point of Contact
    await page.getByRole('button', { name: 'Add Row' }).click();
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Michael Ramirez');
    await page.getByRole('textbox', { name: 'Enter Email ID' }).fill('m.ramirez@sunrisedental.com');
    await page.getByPlaceholder('Enter Mobile Phone').fill('1234567890');
    await page.getByRole('switch').check();

    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Save & Close' }).click();

    await page.waitForTimeout(10000);
    await expect(page.getByText('Sunrise Dental Care')).toBeVisible();
    await expect(page.getByText('Sunrise Dental Professionals')).toBeVisible();
    await expect(page.getByText('SDC-0825-')).toBeVisible();
  });

  await test.step('Edit organization details', async () => {
    await page.getByRole('row', { name: 'Sunrise Dental Care Sunrise' }).getByRole('button').first().click();
    await page.getByRole('textbox', { name: 'Enter client name' }).fill('Green Valley Medical Group');
    await page.getByRole('textbox', { name: 'Enter legal business name' }).fill('Green Valley Healthcare Services, LLC');
    await page.getByRole('textbox', { name: 'Enter unique client ID' }).fill('GVH-2025-001');
    await page.getByRole('textbox', { name: 'Enter address line 1' }).fill('1450 Oak Street');
    await page.getByRole('textbox', { name: 'Enter address line 2 (' }).fill('Suite 200');

    await page.getByRole('combobox', { name: 'Florida' }).click();
    await page.getByRole('option', { name: 'Texas' }).click();
    await page.getByRole('combobox', { name: 'Middleburg' }).click();
    await page.getByRole('option', { name: 'Astor' }).click();

    await page.getByRole('textbox', { name: 'Enter ZIP or postal code' }).fill('78701');

    await page.getByRole('button', { name: 'Add Row' }).click();
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Jennifer Collins');
    await page.getByRole('textbox', { name: 'Enter Email ID' }).fill('j.collins@greenvalleymed.com');
    await page.getByPlaceholder('Enter Mobile Phone').fill('546434354354');
    await page.getByRole('switch').check();

    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('cell', { name: 'Jennifer Collins' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'j.collins@greenvalleymed.com' })).toBeVisible();
    await expect(page.getByRole('cell', { name: '546434354354' })).toBeVisible();
    await page.getByRole('button', { name: 'Save & Close' }).click();
    await expect(page.getByText('Green Valley Medical Group')).toBeVisible();
  });

  await test.step('Delete Point of Contact', async () => {
    await page.getByRole('row', { name: 'Green Valley Medical Group' }).getByRole('button').first().click();
    await page.getByRole('row', { name: 'Jennifer Collins j.collins@' }).getByRole('button').nth(1).click();
    await page.getByRole('button', { name: 'Save & Close' }).click();
  });

  // await test.step('Delete organization', async () => {
  //   await page.getByRole('row', { name: 'Green Valley Medical Group' }).getByLabel('Delete undefined').click();
  //   await expect(page.getByText('Are you sure you want to')).toBeVisible();
  //   await page.getByRole('button', { name: 'Delete' }).click();
  //   await expect(page.getByText('Client deleted successfully.')).toBeVisible();
  // });

});

  // const uniqueEmail = generateRandomEmail();
  // test('Add, Edit, Delete new organization and verify entry in table', async ({ page }) => {
    
  //   await test.step('Login and navigate to organizations', async () => {
  //     await loginWithMicrosoftAccount(page);
  //     await navigateToOrganizations(page);
  //     await openAddOrganizationForm(page);
  //   });

  //   await test.step('Fill basic information and contact person', async () => {
  //     await fillBasicInfo(page, {
  //       clientName: 'Client 1',
  //       businessName: 'Telerik',
  //       // onboardDate: '2025-06-11',
  //       clientId: '12345',
  //       email: uniqueEmail,
  //       phone: '9876543210',
  //       fax: '9876543210',
  //       address: 'No. 44, Lenin Street, Nellithope, Puducherry.',
  //       // city: 'Los Angels',
  //       // state: 'Los Angeles',
  //       // zip: '95010',
  //       // county: 'Los Angeles County',
  //       // country: 'India'
  //     });

  //     await fillContactPerson(page, {
  //       name: 'Jayakumar',
  //       email: 'jj@yopmail.com',
  //       phone: '9876543210',
  //       status: 'Yes'
  //     });
  //   });

  //   await test.step('Save and verify organization', async () => {
  //     await saveAndCloseOrganization(page);
  //     await verifyOrganizationInTable(page, uniqueEmail);
  //   });


  //   await test.step('Edit organization details', async () => {
  //     await clickEditButtonForEmail(page, uniqueEmail);
  //     await fillBasicInfo(page, {
  //       clientName: 'Client 1',
  //       businessName: 'Telerik',
  //       onboardDate: '2025-06-11',
  //       clientId: '12345',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  //       phone: '9876543210',
  //       fax: '9876543210',
  //       address: 'No. 64, Gandhi Street, Manthope, Puducherry.'
  //     });
  //   });

  //   await test.step('Save changes', async () => {
  //     await saveAndCloseOrganization(page);
  //   });
  
  //   await test.step('Delete organization', async () => {
  //     await deleteClientByEmail(page, uniqueEmail);
  //   });
    
  // });

});