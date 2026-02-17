import { test, expect } from '@playwright/test';
import { login } from './Auth';

test('Login และ Logout', async ({ page }) => {

  await test.step('เข้าสู่ระบบ', async () => {
    await login(page, 'admin@example.com', 'admin123');
    await expect(page).toHaveURL(/tasks/);
  });

  await test.step('กดปุ่ม Logout', async () => {
    const logoutBtn = page.getByRole('button', { name: 'Logout' });
    await expect(logoutBtn).toBeVisible();
    await logoutBtn.click();
  });

  await test.step('ตรวจสอบว่ากลับมาหน้า Login', async () => {
    await expect(page).toHaveURL(/login/);

    const emailInput = page.getByLabel('Email address');
    await expect(emailInput).toBeVisible();
  });

});
