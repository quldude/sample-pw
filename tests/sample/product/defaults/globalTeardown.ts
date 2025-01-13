import { test as teardown } from "@playwright/test";

teardown("Perform one-time teardown after all tests.", async ({ page }) => {
  await teardown.step("This is a teardown step.", async () => {
    await page.goto("/");
  });
});
