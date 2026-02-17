import { test, expect } from '@playwright/test';
import { login } from './Auth';

test('แก้ไข Task full loop', async ({ page }) => {

  const TASK_NAME = 'Test234 Pending High';
  const NEW_TITLE = 'Test234';
  const NEW_DESC = 'Testja001';
  const STATUS = 'pending';
  const PRIORITY = 'high';

  await test.step('เข้าสู่ระบบ', async () => {
    await login(page, 'admin@example.com', 'admin123');
    await expect(page).toHaveURL(/tasks/);
  });


  await test.step('เลือก Task ที่ต้องการแก้ไข', async () => {
    const taskLink = page.getByRole('link', { name: TASK_NAME });
    await expect(taskLink).toBeVisible();
    await taskLink.click();
  });

  await test.step('กดปุ่ม Edit Task', async () => {
    const editBtn = page.getByRole('link', { name: 'Edit Task' });
    await expect(editBtn).toBeVisible();
    await editBtn.click();
  });

  await test.step('แก้ไข Title', async () => {
    const title = page.getByLabel('Title *');
    await expect(title).toBeVisible();
    await title.fill(NEW_TITLE);
  });

  await test.step('แก้ไข Description', async () => {
    const desc = page.getByLabel('Description');
    await expect(desc).toBeVisible();
    await desc.fill(NEW_DESC);
  });

  await test.step('เปลี่ยน Status และ Priority', async () => {
    const status = page.getByLabel('Status');
    const priority = page.getByLabel('Priority');

    await expect(status).toBeVisible();
    await status.selectOption(STATUS);

    await expect(priority).toBeVisible();
    await priority.selectOption(PRIORITY);
  });

  await test.step('กด Update Task', async () => {
    const updateBtn = page.getByRole('button', { name: 'Update Task' });
    await expect(updateBtn).toBeVisible();
    await updateBtn.click();
  });

  await test.step('กลับไปหน้า Tasks', async () => {
    const backLink = page.getByRole('link', { name: 'Back to Tasks' });
    await expect(backLink).toBeVisible();
    await backLink.click();

    await expect(page).toHaveURL(/tasks/);
  });

});
