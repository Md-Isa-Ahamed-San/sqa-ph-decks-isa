const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/');
  const details = await page.evaluate(() => {
    const input = document.querySelector('input');
    const container = document.querySelector('.max-w-7xl');
    const h1 = document.querySelector('h1');
    const navDiv = document.querySelector('nav > div');
    return {
      container: container ? {
        marginLeft: getComputedStyle(container).marginLeft,
        marginRight: getComputedStyle(container).marginRight,
        maxWidth: getComputedStyle(container).maxWidth,
        paddingLeft: getComputedStyle(container).paddingLeft,
      } : null,
      navDiv: navDiv ? {
        paddingTop: getComputedStyle(navDiv).paddingTop,
        paddingBottom: getComputedStyle(navDiv).paddingBottom,
        display: getComputedStyle(navDiv).display,
        justifyContent: getComputedStyle(navDiv).justifyContent,
      } : null,
      input: input ? {
        paddingTop: getComputedStyle(input).paddingTop,
        paddingBottom: getComputedStyle(input).paddingBottom,
        paddingLeft: getComputedStyle(input).paddingLeft,
        height: getComputedStyle(input).height,
        fontSize: getComputedStyle(input).fontSize,
      } : null,
      h1: h1 ? {
        fontSize: getComputedStyle(h1).fontSize,
        marginTop: getComputedStyle(h1).marginTop,
      } : null
    };
  });
  console.log(JSON.stringify(details, null, 2));
  await browser.close();
})();
