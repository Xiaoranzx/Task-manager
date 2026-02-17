import { test, expect } from '@playwright/test';
import { login } from './Auth';

test('ค้นหาและกรองข้อมูลหน้า Tasks', async ({ page }) => {


  await test.step('เข้าสู่ระบบ', async () => {
    await login(page, 'admin@example.com', 'admin123');
    await expect(page).toHaveURL(/tasks/);
  });


  await test.step('เลือก Filter by Status = pending', async () => {
    const statusFilter = page.getByLabel('Filter by Status');
    await expect(statusFilter).toBeVisible();
    await statusFilter.click();
    await statusFilter.selectOption('pending');

  });


  await test.step('เลือก Filter by Priority = high', async () => {
    const priorityFilter = page.getByLabel('Filter by Priority');
    await expect(priorityFilter).toBeVisible();
    await priorityFilter.click();
    await priorityFilter.selectOption('high');

  });


  await test.step('เลือก Sort By = priority', async () => {
    const sortBy = page.getByLabel('Sort By');
    await expect(sortBy).toBeVisible();
    await sortBy.click();
    await sortBy.selectOption('priority');

  });


  await test.step('เลือก Sort Order = asc', async () => {
    const sortOrder = page.getByRole('combobox').filter({ hasText: 'Descending' });
    await expect(sortOrder).toBeVisible();
    await sortOrder.click();

    const orderOption = page.getByRole('option', { name: 'Ascending' });
    await expect(orderOption).toBeVisible({ timeout : 1000});
    await orderOption.click(); //หาไม่เจอกดไม่ได้
  });

});
