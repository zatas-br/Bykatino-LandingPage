const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:5173');

  // wait for the page to load
  await page.waitForTimeout(2000);

  // scroll down to the feedback section
  await page.evaluate(() => {
    window.scrollBy(0, 2000);
  });
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'marquee_screenshot.png' });

  // Wait a little bit to see if it moved and capture again
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'marquee_screenshot2.png' });

  await browser.close();
})();
