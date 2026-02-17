import { test, expect } from '@playwright/test';
import { login } from './Auth';

test('เข้าสู่ระบบ (Login)', async ({ page }) => {

  await test.step('เปิดหน้า Login และเข้าสู่ระบบ', async () => {
    await login(page, 'admin@example.com', 'admin123');
  });

  await test.step('ตรวจสอบว่า Login สำเร็จ', async () => {
    await expect(page).toHaveURL(/tasks/);

    const logoutBtn = page.getByRole('button', { name: 'Logout' });
    await expect(logoutBtn).toBeVisible();
  });

});
