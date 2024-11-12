import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: '__tests__/playwright',
  // Glob patterns or regular expressions that match test files.
  testMatch: '*.test.ts',
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: '__tests__/playwright/test-results',  
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },  
  use: {
    // Ensure tests run in headless mode (this is the default setting, but it's good to specify it explicitly)
    headless: true,  // Run tests in headless mode
    // Set up other context configurations as necessary (e.g., for viewport, etc.)
    viewport: { width: 1280, height: 720 },
    // You can add more settings like device emulation if needed
  },
});