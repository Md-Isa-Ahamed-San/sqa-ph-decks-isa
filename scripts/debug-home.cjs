const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const outPath = path.resolve(__dirname, '../exports/home-page-debug.png');
  await page.screenshot({ path: outPath, fullPage: false });
  console.log('Saved screenshot to:', outPath);

  const metrics = await page.evaluate(() => {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const searchList = document.querySelector('.flex.flex-col.gap-14');
    const moduleSection = document.querySelector('section');

    return {
      bodyHeight: document.body.scrollHeight,
      windowHeight: window.innerHeight,
      nav: nav ? nav.getBoundingClientRect() : null,
      header: header ? header.getBoundingClientRect() : null,
      searchList: searchList ? searchList.getBoundingClientRect() : null,
      moduleSection: moduleSection ? moduleSection.getBoundingClientRect() : null,
    };
  });

  console.log('Metrics:', JSON.stringify(metrics, null, 2));
  await browser.close();
})();
