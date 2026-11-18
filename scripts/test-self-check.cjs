const { chromium } = require('playwright');

async function runSelfCheck() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  const testCases = [
    { slide: 1, steps: [0, 1, 2, 3] },
    { slide: 2, steps: [1, 2] },
    { slide: 3, steps: [1, 2, 3] },
  ];

  for (const tc of testCases) {
    console.log(`\n=================== CHECKING SLIDE ${tc.slide} ===================`);
    await page.goto(`http://localhost:3000/deck/02_requirements_to_test_design?slide=${tc.slide}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    for (const step of tc.steps) {
      // Evaluate the user's exact self-check script strictly on the active slide
      const flagged = await page.evaluate(() => {
        const stage = [...document.querySelectorAll('div')].find(d => getComputedStyle(d).width === '1920px') || document.body;
        const activeSlide = stage.querySelector('.slide.active');
        if (!activeSlide) return [{ error: 'No active slide' }];

        const S = stage.getBoundingClientRect(), k = S.width / 1920;
        const boxed = e => parseFloat(getComputedStyle(e).borderTopWidth) > 0 && e.getBoundingClientRect().width / k > 220;
        const out = [];

        activeSlide.querySelectorAll('*').forEach(e => {
          // Ignore nav and footer elements as instructed
          if (e.closest('.deck-ui-chrome') || e.closest('.bottom-bar') || e.closest('.page-num')) return;
          // Check text nodes
          if (![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return;
          const r = e.getBoundingClientRect();
          let c = e.parentElement;
          while (c && c !== activeSlide && !boxed(c)) c = c.parentElement;
          const cb = c && c !== activeSlide ? c.getBoundingClientRect() : null;
          const pad = cb ? Math.min(r.left - cb.left, cb.right - r.right, r.top - cb.top, cb.bottom - r.bottom) / k : null;
          const x1 = (r.left - S.left) / k, x2 = (r.right - S.left) / k, y2 = (r.bottom - S.top) / k;

          if ((pad !== null && pad < 20) || x1 < 100 || x2 > 1820 || y2 > 940) {
            out.push({
              t: e.textContent.trim().slice(0, 32),
              tag: e.tagName,
              pad: pad && Math.round(pad),
              x1: Math.round(x1),
              x2: Math.round(x2),
              y2: Math.round(y2)
            });
          }
        });
        return out;
      });

      console.log(`--- Slide ${tc.slide} Step ${step} ---`);
      if (flagged.length === 0) {
        console.log(`PASS: 0 issues`);
      } else {
        console.table(flagged);
      }

      // Trigger next step
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(400);
    }
  }

  await browser.close();
}

runSelfCheck().catch(console.error);
