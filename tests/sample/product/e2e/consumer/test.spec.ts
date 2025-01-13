import { expect, test } from "@playwright/test";

test.beforeEach(async ({}) => {
  // do nothing
});

test.afterEach(async ({}) => {
  // do nothing
});

test("This is a sample test.", async ({ page }) => {
  await page.goto("/");
  await page.goto("/docs/intro");
  await expect(page.locator("//a[.='Getting Started']")).toBeVisible();
});

test("URLs loop test.", async ({ page }) => {
  for (const url in ["/", "/docs/intro", "/docs/api/class-playwright"]) {
    await page.goto(url);
  }
});
