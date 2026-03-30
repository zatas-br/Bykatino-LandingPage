const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // Navigate to the local server
    await page.goto('http://localhost:5173');

    // Wait for the feedback section to be visible
    const feedbackSection = page.locator('section').filter({ hasText: 'Veja o feedback dos nossos clientes' });
    await feedbackSection.scrollIntoViewIfNeeded();

    // Wait for the layout to settle
    await page.waitForTimeout(1000);

    // Take a screenshot of the feedback section
    await feedbackSection.screenshot({ path: '/app/feedback-carousel-rounded.png' });
    console.log("Screenshot captured: /app/feedback-carousel-rounded.png");

  } catch (error) {
    console.error("Error during verification:", error);
  } finally {
    await browser.close();
  }
})();
