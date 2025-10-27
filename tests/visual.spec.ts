import { test, expect } from '@playwright/test';

test('전체 페이지 캡처', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('full.png', {
    fullPage: true,
    maxDiffPixels: 100,
  });

});
