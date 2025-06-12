import { defineConfig, devices } from '@playwright/test';

export const clientBaseURL = 'https://devrcmgenie.asprcmsolutions.com/client/';
export const agentBaseURL = 'https://devrcmgenie.asprcmsolutions.com/';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  timeout: 180000,
  reporter: [
    ['line'],
    ['html'],
    ['junit', { outputFile: './report/results.xml' }],
    ['monocart-reporter', {
      name: "ASPRCM Automation Test Report",
      outputFile: './report/monocart-report/index.html'
    }]
  ],
  use: {
    baseURL: agentBaseURL, // Use baseURL for Playwright's built-in support
  },

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        channel: 'chrome',
        headless: process.env.CI ? true : false,
        screenshot: 'on',
        video: 'on',
        trace: 'retain-on-failure',
        actionTimeout: 60000,
        viewport: null,
        deviceScaleFactor: undefined,
        launchOptions: { args: ['--start-maximized'] }
      }
    },
  ],
});
