import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string) {
  await page.goto('https://app-testing-sea-01.azurewebsites.net/login');

  await page.getByLabel('Email address').fill(email);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}
