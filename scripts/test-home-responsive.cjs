const { chromium } = require('playwright');
const path = require('path');

async function testScreenshots() {
  const browser = await chromium.launch();
  
  const viewports = [
    { name: '1920x1080_full', width: 1920, height: 1080, fullPage: true },
    { name: '1920x1080_viewport', width: 1920, height: 1080, fullPage: false },
    { name: '1440x900_viewport', width: 1440, height: 900, fullPage: false },
    { name: '768x1024_viewport', width: 768, height: 1024, fullPage: false },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    const savePath = path.resolve('ph-decks/exports', `home_${vp.name}.png`);
    await page.screenshot({ path: savePath, fullPage: vp.fullPage });
    console.log(`Saved screenshot: ${savePath}`);
    await page.close();
  }

  await browser.close();
}

testScreenshots().catch(console.error);
