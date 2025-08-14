import { test, expect } from '@playwright/test';
import { loginWithMicrosoftAccount } from 'utils/AgentPortal_utils/authUtils';


test('Source', async ({ page }) => {

    await test.step('Login and navigate to organizations', async () => {
        await loginWithMicrosoftAccount(page);
    });

    
     });