const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:5173');

  // wait for the page to load
  await page.waitForTimeout(2000);

  // scroll all the way down to the Sets section
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'sets_screenshot.png' });

  await browser.close();
})();
