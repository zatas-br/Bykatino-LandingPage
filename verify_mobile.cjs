const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X dimensions
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  await page.goto('http://localhost:5177');

  // Give it some time to render completely
  await page.waitForTimeout(2000);

  // Take a full page screenshot to verify all sections on mobile
  await page.screenshot({ path: '/home/jules/verification/mobile_full_page.png', fullPage: true });

  await browser.close();
})();
