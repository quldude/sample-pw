import { expect, test } from "@playwright/test";

test.beforeEach(async ({}) => {
  // do nothing
});

test.afterEach(async ({}) => {
  // do nothing
});

test("This is a sample test.", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.locator("input[aria-label='Google Search']").nth(1)
  ).toBeVisible();
});
