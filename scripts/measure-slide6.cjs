const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/deck/02_requirements_to_test_design?slide=6');
  const boxes = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.slide.active .box-border')).map(el => {
      const r = el.getBoundingClientRect();
      return { class: el.className, top: r.top, bottom: r.bottom, height: r.height };
    });
  });
  console.log('Slide 6 boxes:', JSON.stringify(boxes, null, 2));
  await page.screenshot({ path: 'ph-decks/exports/slide6_current.png' });
  await browser.close();
})();
