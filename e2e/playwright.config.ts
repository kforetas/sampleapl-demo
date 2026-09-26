import { defineConfig } from '@playwright/test';

// BASE_URL: テスト対象の URL（パイプラインでは dev 環境の Route を渡す）
// REPORT_DIR: HTML レポートとスクリーンショットの出力先
const reportDir = process.env.REPORT_DIR ?? 'playwright-report';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  // デプロイ直後は Route が安定しないことがあるため 1 回だけリトライ
  retries: 1,
  reporter: [['list'], ['html', { open: 'never', outputFolder: reportDir }]],
  use: {
    baseURL: process.env.BASE_URL ?? 'http://localhost:8088',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
  },
});
