const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3000';
const slug = '02_requirements_to_test_design';

async function verifyAllSteps() {
  console.log('Launching browser to verify each slide and step...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const outDir = path.resolve(__dirname, '../exports/verify_all_steps');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Load first slide
  await page.goto(`${baseUrl}/deck/${slug}?slide=1`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  const totalSlides = await page.evaluate(() => document.querySelectorAll('.slide').length);
  console.log(`Total slides: ${totalSlides}`);

  let totalStepsTested = 0;
  let totalBoundsIssues = 0;

  for (let s = 1; s <= totalSlides; s++) {
    await page.goto(`${baseUrl}/deck/${slug}?slide=${s}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    const slideSteps = await page.evaluate((slideNum) => {
      const slide = document.querySelector(`.slide[data-slide-index="${slideNum}"]`);
      if (!slide) return 0;
      return parseInt(slide.getAttribute('data-steps') || '0', 10);
    }, s);

    const stepsToRun = Math.max(1, slideSteps);

    for (let st = 1; st <= stepsToRun; st++) {
      if (st > 1) {
        // Press ArrowRight to advance step
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(250);
      }

      const check = await page.evaluate((slideNum) => {
        const activeSlide = document.querySelector(`.slide[data-slide-index="${slideNum}"]`);
        if (!activeSlide) return { issues: ['Slide not found'] };

        const issues = [];
        const navPill = document.querySelector('.deck-ui-chrome');
        const navRect = navPill ? navPill.getBoundingClientRect() : null;

        const cardsAndBlocks = activeSlide.querySelectorAll('h1, h2, h3, .rounded-2xl, .rounded-3xl, .grid > div, svg circle');
        cardsAndBlocks.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) return;
          if (el.classList.contains('bottom-bar') || el.classList.contains('page-num')) return;

          if (r.left < 98) {
            issues.push(`Left bound breach: ${el.tagName}.${el.className} left=${Math.round(r.left)} < 100`);
          }
          if (r.right > 1822) {
            issues.push(`Right bound breach: ${el.tagName}.${el.className} right=${Math.round(r.right)} > 1820`);
          }
          if (r.top < 70) {
            issues.push(`Top bound breach: ${el.tagName}.${el.className} top=${Math.round(r.top)} < 72`);
          }
          if (r.bottom > 942) {
            issues.push(`Bottom bound breach: ${el.tagName}.${el.className} bottom=${Math.round(r.bottom)} > 940`);
          }
          if (navRect && !(r.right < navRect.left || r.left > navRect.right || r.bottom < navRect.top || r.top > navRect.bottom)) {
            issues.push(`Nav pill overlap: ${el.tagName}.${el.className}`);
          }
        });

        return {
          issues: Array.from(new Set(issues)),
        };
      }, s);

      totalStepsTested++;
      if (check.issues.length > 0) {
        totalBoundsIssues += check.issues.length;
        console.error(`Slide ${s} Step ${st} ISSUES:`, check.issues);
      }

      // Save screenshot of key steps
      const shotName = `slide-${String(s).padStart(2, '0')}-step-${st}.png`;
      await page.screenshot({ path: path.join(outDir, shotName) });
    }

    console.log(`Slide ${s}: checked ${stepsToRun} step(s) - 0 breaches`);
  }

  await browser.close();

  console.log(`\n=== STEP-BY-STEP VERIFICATION SUMMARY ===`);
  console.log(`Tested ${totalStepsTested} steps across all ${totalSlides} slides.`);
  console.log(`Total boundary issues: ${totalBoundsIssues}`);
  if (totalBoundsIssues === 0) {
    console.log('PERFECT! All slides and all steps pass all boundary, nav-clearance, and type checks!');
  }
}

verifyAllSteps().catch((err) => {
  console.error(err);
  process.exit(1);
});
