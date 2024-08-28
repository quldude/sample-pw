import { test as setup } from "@playwright/test";

setup("Perform one-time setup for all tests.", async ({ page }) => {
  await setup.step("This is a setup step.", async () => {
    await page.goto("/");
  });
});
