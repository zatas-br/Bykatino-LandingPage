import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to your app
  await page.goto('http://localhost:5173');

  // Wait for React to render
  await page.waitForTimeout(1000);

  // Set viewport large enough for the layout
  await page.setViewportSize({ width: 1440, height: 1000 });

  // Take screenshot
  await page.screenshot({ path: '/home/jules/verification/hero-updated.png', fullPage: true });

  await browser.close();
})();
