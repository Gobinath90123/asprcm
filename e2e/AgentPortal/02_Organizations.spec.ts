import { test } from '@playwright/test';
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
  const uniqueEmail = generateRandomEmail();

  test('Add new organization and verify entry in table', async ({ page }) => {
    await test.step('Login and navigate to organizations', async () => {
      await loginWithMicrosoftAccount(page);
      await navigateToOrganizations(page);
      await openAddOrganizationForm(page);
    });

    await test.step('Fill basic information and contact person', async () => {
      await fillBasicInfo(page, {
        clientName: 'Client 1',
        businessName: 'Telerik',
        onboardDate: '2025-06-11',
        clientId: '12345',
        email: uniqueEmail,
        phone: '9876543210',
        fax: '9876543210',
        address: 'No. 44, Lenin Street, Nellithope, Puducherry.',
        city: 'Los Angels',
        state: 'Los Angeles',
        zip: '95010',
        county: 'Los Angeles County',
        country: 'India'
      });

      await fillContactPerson(page, {
        name: 'Jayakumar',
        email: 'jj@yopmail.com',
        phone: '9876543210',
        status: 'Yes'
      });
    });

    await test.step('Save and verify organization', async () => {
      await saveAndCloseOrganization(page);
      await verifyOrganizationInTable(page, uniqueEmail);
    });
  });

  test('Edit new organization and verify entry in table', async ({ page }) => {
    await test.step('Edit organization details', async () => {
      await clickEditButtonForEmail(page, uniqueEmail);
      await fillBasicInfo(page, {
        clientName: 'Client 1',
        businessName: 'Telerik',
        onboardDate: '2025-06-11',
        clientId: '12345',
        email: uniqueEmail,
        phone: '9876543210',
        fax: '9876543210',
        address: 'No. 64, Gandhi Street, Manthope, Puducherry.'
      });
    });

    await test.step('Save changes', async () => {
      await saveAndCloseOrganization(page);
    });
  });

  test('Delete new organization and verify entry in table', async ({ page }) => {
    await test.step('Delete organization', async () => {
      await deleteClientByEmail(page, uniqueEmail);
    });
  });
});