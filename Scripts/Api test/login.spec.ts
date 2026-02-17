import { test, expect } from '@playwright/test';

test('Login API ', async ({ request }) => {

  const response = await request.post(
    'https://zqrruwmsvexsfixmalvt.supabase.co/auth/v1/token?grant_type=password',
    {
      headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcnJ1d21zdmV4c2ZpeG1hbHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODU2MjYsImV4cCI6MjA4NDY2MTYyNn0.2ixknLW6xxYSALPD31wnma5qnPpKFXJOz2eQfeQQLIo',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcnJ1d21zdmV4c2ZpeG1hbHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODU2MjYsImV4cCI6MjA4NDY2MTYyNn0.2ixknLW6xxYSALPD31wnma5qnPpKFXJOz2eQfeQQLIo',
        'content-type': 'application/json'
      },
      data: {
        email: 'admin@example.com',
        password: 'admin123'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.access_token).toBeTruthy();
  
  expect(body.user.email).toBe('admin@example.com');

});
