const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const elements = await page.evaluate(() => {
    const list = [];
    const all = document.querySelectorAll('main > *, nav, header, input, section');
    all.forEach((el) => {
      const r = el.getBoundingClientRect();
      const s = window.getComputedStyle(el);
      list.push({
        tag: el.tagName,
        class: el.className,
        rect: { top: Math.round(r.top), bottom: Math.round(r.bottom), height: Math.round(r.height), left: Math.round(r.left), width: Math.round(r.width) },
        display: s.display,
        visibility: s.visibility,
        opacity: s.opacity,
        margin: `${s.marginTop} ${s.marginRight} ${s.marginBottom} ${s.marginLeft}`
      });
    });
    return list;
  });

  console.log(JSON.stringify(elements, null, 2));
  await browser.close();
})();
