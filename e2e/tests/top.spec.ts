import { test, expect } from '@playwright/test';

const screenshotDir = process.env.REPORT_DIR ?? 'playwright-report';

test('トップページが表示される', async ({ page }) => {
  // 外部 CDN (jQuery) の読み込みを待たないよう domcontentloaded で判定
  const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(200);

  await expect(page).toHaveTitle('Demo WEB Page');
  await expect(
    page.getByRole('heading', { level: 2, name: 'プロレスから学ぶ人生の教訓シリーズ' }),
  ).toBeVisible();
  await expect(page.getByText('変化は緩やかに')).toBeVisible();

  await page.screenshot({ path: `${screenshotDir}/top.png`, fullPage: true });
});

test('静的ファイルが配信される', async ({ request }) => {
  for (const path of ['/static/css/main.css', '/static/image/study1.pdf']) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
});
