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
});

// Negative Test Case
test('Ensure login with an unregistered Microsoft domain email shows an error message and access is denied.', async ({ page }) => {
  await navigateToLoginPage(page);
  await loginWithInvalidCredentials(page);
  await verifySignInFailure(page);
});

});