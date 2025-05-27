import { defineConfig, devices } from '@playwright/test';

export const baseURL = 'http://35.225.79.245:3000/';
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
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
    baseURL: baseURL,
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
