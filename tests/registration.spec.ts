import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.describe('Registration Test', () => {
  test('Register user and verify registration details', async ({ page }) => {
    await allure.epic('Web Automation');
    await allure.feature('Registration');
    await allure.story('Register a new user');
    await allure.tags('registration', 'playwright', 'typescript', 'smoke');

    // Open registration page
    await page.goto('https://demo.automationtesting.in/Register.html', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    await allure.step('Enter registration details', async () => {
      await page.locator('#basicBootstrapForm input[ng-model="FirstName"]').fill('Kiran');

      await page.locator('#basicBootstrapForm input[ng-model="LastName"]').fill('Automation');

      await page
        .locator('#basicBootstrapForm textarea[ng-model="Adress"]')
        .fill('Hyderabad, Telangana, India');

      await page
        .locator('#basicBootstrapForm input[ng-model="EmailAdress"]')
        .fill(`kiran${Date.now()}@example.com`);

      await page.locator('#basicBootstrapForm input[ng-model="Phone"]').fill('9876543210');

      await page.locator('#basicBootstrapForm input[value="Male"]').check();

      await page.locator('#basicBootstrapForm input[value="Cricket"]').check();

      await page.locator('#basicBootstrapForm #Skills').selectOption({ label: 'Java' });

      await page.locator('#basicBootstrapForm #yearbox').selectOption('1990');

      await page
        .locator('#basicBootstrapForm select[ng-model="monthbox"]')
        .selectOption({ label: 'January' });

      await page.locator('#basicBootstrapForm #daybox').selectOption('1');

      await page.locator('#basicBootstrapForm input[ng-model="Password"]').fill('Test@12345');

      await page.locator('#basicBootstrapForm input[ng-model="CPassword"]').fill('Test@12345');
    });

    await allure.step('Verify entered details', async () => {
      await expect(page.locator('input[ng-model="FirstName"]')).toHaveValue('Kiran');

      await expect(page.locator('input[ng-model="LastName"]')).toHaveValue('Automation');

      await expect(page.locator('textarea[ng-model="Adress"]')).toHaveValue(
        'Hyderabad, Telangana, India',
      );

      await expect(page.locator('input[ng-model="Phone"]')).toHaveValue('9876543210');

      await expect(page.locator('input[value="Male"]')).toBeChecked();

      await expect(page.locator('input[value="Cricket"]')).toBeChecked();

      await expect(page.locator('#Skills')).toHaveValue('Java');

      await expect(page.locator('#yearbox')).toHaveValue('1990');

      await expect(page.locator('#daybox')).toHaveValue('1');
    });

    await allure.step('Submit registration', async () => {
      await page.locator('#submitbtn').click();
    });

    await allure.step('Verify registration submission', async () => {
      // The application remains on the registration page after submit.
      await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');

      await expect(page.locator('#basicBootstrapForm')).toBeVisible();
    });

    await page.screenshot({
      path: 'test-results/registration-completed.png',
      fullPage: true,
    });
  });
});
