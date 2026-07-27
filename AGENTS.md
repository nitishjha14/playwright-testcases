# AGENTS.md

## Project overview
- This workspace is a Playwright test project using `@playwright/test`.
- Test files live in `tests/` and use the common `test` / `expect` API.
- The browser matrix is configured in [playwright.config.js](playwright.config.js) for `chromium`, `firefox`, and `webkit`.

## Working conventions
- Prefer small, focused Playwright specs in `tests/*.spec.js`.
- Keep selectors stable and explicit; favor locators over brittle DOM traversal.
- Validate behavior with `expect(...)` rather than only logging intermediate state.
- Avoid unnecessary changes to [playwright.config.js](playwright.config.js) unless the test environment or reporting needs to change.

## Run and verify
- Run the suite: `npx playwright test`
- Run headed locally: `npx playwright test --headed`
- Use the existing Playwright HTML reporter in [playwright.config.js](playwright.config.js).

## Notes for AI agents
- If a test is failing, reproduce it with the smallest relevant command before changing the spec.
- Prefer editing the existing test file or adding a new spec in `tests/` rather than introducing a new test framework.
- Keep changes compatible with the current CommonJS package setup in [package.json](package.json).
