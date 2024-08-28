import { PlaywrightTestConfig, devices } from "@playwright/test";

const baseURL = "https://google.com/";
const WORKING_DIR = process.env.PWD ? process.env.PWD : process.cwd();
const TEST_FOLDER = `${WORKING_DIR}/tests`;
const SUBPRODUCT_TEST_FOLDER = `${TEST_FOLDER}/sample/product`;
const CUSTOM_USER_AGENT = "CustomAutomationUserAgent";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const defaultPlaywrightConfig: PlaywrightTestConfig = {
  testDir: SUBPRODUCT_TEST_FOLDER,
  testMatch: /.*\.spec\.ts/,
  // Maximum time one test can run for.
  timeout: 7 * 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 60 * 1000,
  },
  /* Run test files in parallel */
  fullyParallel: false,
  workers: "100%",
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters and https://github.com/microsoft/playwright/issues/26481 */
  reporter: [["html", { open: "on-failure" }]],
  /*Don't report slow test files.*/
  reportSlowTests: null,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    testIdAttribute: "id",
    headless: true,
    screenshot: {
      mode: "only-on-failure",
      fullPage: true,
    },
    video: "retain-on-failure",
    ignoreHTTPSErrors: false,
    actionTimeout: 1 * 60 * 1000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: /.*globalSetup\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        userAgent: `${devices["Desktop Chrome"].userAgent} ${CUSTOM_USER_AGENT}`,
      },
      dependencies: ["setup"],
    },
  ],
};

export default defaultPlaywrightConfig;
