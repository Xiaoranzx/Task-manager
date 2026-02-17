import { test, expect } from '@playwright/test';

test('Login แล้วไปหน้าสร้าง ', async ({ request }) => {

    const loginResponse = await request.post(
        'https://app-testing-sea-01.azurewebsites.net/login',
        {
            form: {
                email: 'admin@example.com',
                password: 'admin123'
            }
        }
    );

    expect(loginResponse.status()).toBe(200);


    const response = await request.get(
        'https://app-testing-sea-01.azurewebsites.net/tasks/new'
    );

    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain('Create New Task');

});
