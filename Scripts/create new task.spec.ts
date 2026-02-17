import { test, expect } from '@playwright/test';
import { login } from './Auth';

test(' create new task', async ({ page }) => {

    const title = 'Test234';
    const descrip = 'Testja001';
    const status = 'pending';
    const priority = 'high';

    await test.step('เข้าสู่ระบบ', async () => {
        await login(page, 'admin@example.com', 'admin123');
        await expect(page).toHaveURL(/tasks/);
    });


    await test.step('create new task', async () => {
        const newtaskBtn = page.getByRole('link', { name: 'Create New Task' })
        await expect(newtaskBtn).toBeVisible();
        await newtaskBtn.click();
        

        await Promise.all([
            page.waitForURL(/\/tasks\/new/),
            newtaskBtn.click(),
        ]);

        await page.waitForLoadState('networkidle');
        console.log('Current URL:', page.url());

        await expect(page).toHaveURL(/\/tasks\/new/);
    });

});