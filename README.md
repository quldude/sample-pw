# To Execute

1. Clone this repo in a machine that has win 11 pro OS.
2. Open project in VS Code.
3. Open bash terminal in VS Code.
4. Run `npm install` and `npx playwright install chromium`.
5. Run a test `npm run playwright:specificTests -- "This is a sample test\." --headed`. The test runs a global setup and then the test itself.
6. To see chromium launching in a previous playwright version, install v1.44.1 `npm install @playwright/test@1.44.1; npx playwright install chromium` and run the test.
