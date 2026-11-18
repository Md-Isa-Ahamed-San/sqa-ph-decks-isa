const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3000';
const slug = '02_requirements_to_test_design';

async function runVerification() {
  console.log('Launching browser at 1920x1080...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const outDir = path.resolve(__dirname, '../exports/verify_deck02');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Load deck
  const deckUrl = `${baseUrl}/deck/${slug}`;
  console.log(`Navigating to ${deckUrl}...`);
  await page.goto(deckUrl, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const totalSlides = await page.evaluate(() => document.querySelectorAll('.slide').length);
  console.log(`Total slides: ${totalSlides}`);

  const results = [];
  const eyebrows = [];

  for (let s = 1; s <= totalSlides; s++) {
    // Jump to slide
    await page.goto(`${baseUrl}/deck/${slug}?slide=${s}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    const slideData = await page.evaluate((slideNum) => {
      const activeSlide = document.querySelector(`.slide[data-slide-index="${slideNum}"]`);
      if (!activeSlide) return { error: `Slide ${slideNum} not found` };

      // Eyebrow check
      const eyebrowEl = activeSlide.querySelector('.font-mono.tracking-widest.uppercase') || activeSlide.querySelector('.slide-eyebrow');
      let eyebrowRect = null;
      if (eyebrowEl) {
        const r = eyebrowEl.getBoundingClientRect();
        eyebrowRect = { top: Math.round(r.top), left: Math.round(r.left), bottom: Math.round(r.bottom), fontSize: window.getComputedStyle(eyebrowEl).fontSize };
      }

      // Safe box checks on content
      // Elements inside SlideShell content area
      const issues = [];
      const contentElements = activeSlide.querySelectorAll('h1, h2, h3, p, span, div, li, ul, ol, svg');
      
      const stage = document.querySelector('.deck-stage');
      const stageRect = stage ? stage.getBoundingClientRect() : { left: 0, top: 0, right: 1920, bottom: 1080 };

      // Nav pill rect
      const navPill = document.querySelector('.deck-ui-chrome');
      const navRect = navPill ? navPill.getBoundingClientRect() : null;

      // Page num rect
      const pageNumEl = activeSlide.querySelector('.page-num');
      const pageNumRect = pageNumEl ? pageNumEl.getBoundingClientRect() : null;

      // Check card / content bounding boxes
      // We look at direct card / container / text boxes (not stage or slide root)
      const cardsAndBlocks = activeSlide.querySelectorAll('h1, h3, .rounded-2xl, .rounded-3xl, .grid > div, svg circle');
      cardsAndBlocks.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;

        // Skip root slide, bottom bar, page-num
        if (el.classList.contains('bottom-bar') || el.classList.contains('page-num')) return;

        // Tolerant to 2px subpixel rendering
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
          // If it's footer bar or page-num, skip
          if (!el.classList.contains('page-num') && !el.classList.contains('bottom-bar')) {
            issues.push(`Bottom bound breach: ${el.tagName}.${el.className} bottom=${Math.round(r.bottom)} > 940`);
          }
        }

        // Nav pill overlap check
        if (navRect && !(r.right < navRect.left || r.left > navRect.right || r.bottom < navRect.top || r.top > navRect.bottom)) {
          issues.push(`Nav pill overlap: ${el.tagName}.${el.className}`);
        }
      });

      // Type size checks
      const cardTitles = activeSlide.querySelectorAll('h3');
      const typeIssues = [];
      cardTitles.forEach((ct) => {
        const size = parseFloat(window.getComputedStyle(ct).fontSize);
        if (size < 28) { // Target >= 30, allow 28 for tight 6-item layouts
          typeIssues.push(`Card title fontSize ${size}px < 28px: "${ct.textContent.trim().slice(0, 30)}"`);
        }
      });

      return {
        slideNum,
        eyebrowRect,
        issues: Array.from(new Set(issues)),
        typeIssues: Array.from(new Set(typeIssues)),
      };
    }, s);

    eyebrows.push({ slide: s, ...slideData.eyebrowRect });

    // Take screenshot
    const shotPath = path.join(outDir, `slide-${String(s).padStart(2, '0')}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });

    results.push({
      slide: s,
      issues: slideData.issues,
      typeIssues: slideData.typeIssues,
      screenshot: shotPath,
    });
  }

  // Also check export mode
  await page.goto(`${baseUrl}/deck/${slug}?export=true`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const exportShot = path.join(outDir, 'deck-export-overview.png');
  await page.screenshot({ path: exportShot, fullPage: false });

  await browser.close();

  console.log('\n=== EYEBROW POSITION ACROSS ALL SLIDES ===');
  console.table(eyebrows);

  console.log('\n=== VERIFICATION RESULTS ===');
  let hasFailures = false;
  results.forEach((r) => {
    console.log(`Slide ${r.slide}:`);
    if (r.issues.length === 0 && r.typeIssues.length === 0) {
      console.log('  PASS (0 bounds breaches, 0 nav overlaps, type sizes valid)');
    } else {
      if (r.issues.length > 0) {
        hasFailures = true;
        console.log('  Bounds issues:', r.issues);
      }
      if (r.typeIssues.length > 0) {
        console.log('  Type size notes:', r.typeIssues);
      }
    }
  });

  return { hasFailures, results, eyebrows };
}

runVerification().catch((err) => {
  console.error(err);
  process.exit(1);
});
