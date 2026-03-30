const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');

  // Verify Hero section background and button hover
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'hero-updated.png' });

  // Hover over the button in Hero
  const button = await page.locator('text=VER COLEÇÃO').first();
  await button.hover();
  await page.waitForTimeout(500); // wait for animation
  await page.screenshot({ path: 'hero-hover-updated.png' });

  // Verify Feedback section
  const feedbackSection = await page.locator('text=Veja o feedback dos nossos clientes').locator('..').locator('..');
  await feedbackSection.screenshot({ path: 'feedback-section.png' });

  await browser.close();
})();
