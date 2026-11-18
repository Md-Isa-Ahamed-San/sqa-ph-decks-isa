const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  console.log('--- Inspecting http://localhost:3000/ ---');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'ph-decks/exports/debug_home.png' });

  const homeMetrics = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const body = document.body;
    const html = document.documentElement;

    return {
      windowHeight: window.innerHeight,
      scrollY: window.scrollY,
      htmlHeight: html.offsetHeight,
      bodyHeight: body.offsetHeight,
      bodyScrollHeight: body.scrollHeight,
      bodyComputed: {
        display: getComputedStyle(body).display,
        justifyContent: getComputedStyle(body).justifyContent,
        alignItems: getComputedStyle(body).alignItems,
        margin: getComputedStyle(body).margin,
        padding: getComputedStyle(body).padding,
      },
      navRect: nav ? nav.getBoundingClientRect() : null,
      headerRect: header ? header.getBoundingClientRect() : null,
      mainRect: main ? main.getBoundingClientRect() : null,
    };
  });
  console.log('Home metrics:', JSON.stringify(homeMetrics, null, 2));

  console.log('\n--- Inspecting Slide 1 ---');
  await page.goto('http://localhost:3000/deck/02_requirements_to_test_design?slide=1', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'ph-decks/exports/debug_slide1.png' });

  const slideMetrics = await page.evaluate(() => {
    const viewport = document.querySelector('.deck-viewport');
    const stage = document.querySelector('.deck-stage');
    const activeSlide = document.querySelector('.slide.active');
    const header = activeSlide ? activeSlide.querySelector('header, .header-zone, [data-slide-shell]') : null;

    return {
      viewportRect: viewport ? viewport.getBoundingClientRect() : null,
      viewportComputed: viewport ? {
        display: getComputedStyle(viewport).display,
        justifyContent: getComputedStyle(viewport).justifyContent,
        alignItems: getComputedStyle(viewport).alignItems,
        transform: getComputedStyle(viewport).transform,
      } : null,
      stageRect: stage ? stage.getBoundingClientRect() : null,
      stageComputed: stage ? {
        transform: getComputedStyle(stage).transform,
        transformOrigin: getComputedStyle(stage).transformOrigin,
        top: getComputedStyle(stage).top,
        left: getComputedStyle(stage).left,
        position: getComputedStyle(stage).position,
      } : null,
      activeSlideRect: activeSlide ? activeSlide.getBoundingClientRect() : null,
    };
  });
  console.log('Slide 1 metrics:', JSON.stringify(slideMetrics, null, 2));

  await browser.close();
}

main().catch(console.error);
