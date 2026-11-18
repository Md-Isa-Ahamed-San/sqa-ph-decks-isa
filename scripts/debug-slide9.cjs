const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/deck/02_requirements_to_test_design?slide=9');
  await page.waitForTimeout(400);
  const data = await page.evaluate(() => {
    const slide = document.querySelector('.slide[data-slide-index="9"]');
    const cards = Array.from(slide.querySelectorAll('.rounded-2xl'));
    const container = slide.querySelector('.flex.w-full.items-center');
    return {
      containerRect: container ? container.getBoundingClientRect() : null,
      cards: cards.map((c, i) => {
        const r = c.getBoundingClientRect();
        return {
          i,
          class: c.className.split(' ').slice(0, 3).join(' '),
          top: Math.round(r.top),
          bottom: Math.round(r.bottom),
          height: Math.round(r.height),
          text: c.innerText.slice(0, 40).replace(/\n/g, ' ')
        };
      })
    };
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
