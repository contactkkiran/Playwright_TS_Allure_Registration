# Playwright TypeScript + Allure — Standalone Registration Test

This project intentionally uses **one standalone spec file** with **no Page Object Model**.

## Project structure

```text
Playwright_TS_Allure_Registration/
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── tests/
│   └── registration.spec.ts
└── README.md
```

## Install

```bash
npm install
npx playwright install chromium
```

## Run

Headless:

```bash
npm test
```

Headed:

```bash
npm run test:headed
```

## Playwright HTML report

```bash
npx playwright show-report playwright-report
```

## Allure report

Generate:

```bash
npm run report
```

Open:

```bash
npm run report:open
```

The test uses direct locators in the spec file and does not use Page Objects.

rm -rf allure-results allure-report test-results playwright-report

npx playwright codegen https://demoqa.com/automation-practice-form
