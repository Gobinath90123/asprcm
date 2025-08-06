import { test } from '@playwright/test';
import { navigateToLoginPage, loginWithMicrosoft, approveSignInRequest, verifyTicketsModule, loginWithInvalidCredentials, verifySignInFailure } from '../../utils/AgentPortal_utils/authUtils';
import { authConfig } from '../../utils/AgentPortal_utils/config';


test.describe('Login Tests', () => {

// Positive Test Case
  test('Verify successful login with registered Microsoft account', async ({ page }) => {
    await navigateToLoginPage(page);
    await loginWithMicrosoft(page, authConfig.email, authConfig.password);
    await approveSignInRequest(page);
    await verifyTicketsModule(page);
  });

// Negative Test Case
test('Ensure login with an unregistered Microsoft domain email shows an error message and access is denied.', async ({ page }) => {
  await navigateToLoginPage(page);
  await loginWithInvalidCredentials(page);
  await verifySignInFailure(page);
});

});