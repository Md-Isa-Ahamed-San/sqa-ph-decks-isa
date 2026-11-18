import { chromium } from "playwright";
import fs from "fs";
import path from "path";

/**
 * PDF Exporter using Playwright for ph-decks
 * Enforces 1920x1080 resolution, waits for fonts.ready, and checks for DOM overflows.
 */
const defaultBaseUrl = process.env.BASE_URL ?? `http://localhost:${process.env.PORT ?? "3005"}`;

async function exportDeckToPdf(
  slug = "01_start_your_qa_career",
  baseUrl = defaultBaseUrl
) {
  console.log(`[Export] Starting PDF export for deck: ${slug}...`);

  const outputDir = path.resolve(process.cwd(), "exports");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });

  const page = await context.newPage();

  // Load first slide with export=true
  const url = `${baseUrl}/deck/${slug}?export=true`;
  console.log(`[Export] Loading ${url}...`);

  try {
    await page.goto(url, { waitUntil: "networkidle" });
  } catch (err) {
    console.error(`[Export] Error loading deck page. Ensure dev server is running on ${baseUrl}.`, err);
    await browser.close();
    process.exit(1);
  }

  // Wait for fonts
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  // Query total slides
  const totalSlides = await page.evaluate(() => {
    return document.querySelectorAll(".slide").length;
  });

  console.log(`[Export] Found ${totalSlides} slides. Checking DOM bounds and capturing...`);

  // Detect any element that overflows the 1920x1080 stage
  const overflowIssues = await page.evaluate(() => {
    const issues: string[] = [];
    const stage = document.querySelector(".deck-stage");
    if (!stage) return ["No .deck-stage found in DOM"];

    const stageRect = stage.getBoundingClientRect();
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, sIdx) => {
      const elements = slide.querySelectorAll("*");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (
          rect.right > stageRect.right + 2 ||
          rect.bottom > stageRect.bottom + 2 ||
          rect.left < stageRect.left - 2 ||
          rect.top < stageRect.top - 2
        ) {
          const tag = el.tagName.toLowerCase();
          const className = el.className;
          issues.push(
            `Slide ${sIdx + 1}: Element <${tag} class="${className}"> overflows stage bounds.`
          );
        }
      });
    });

    return issues;
  });

  if (overflowIssues.length > 0) {
    console.warn("[Export Warning] Detected layout overflow issues:");
    overflowIssues.forEach((issue) => console.warn(`  - ${issue}`));
  } else {
    console.log("[Export QA] All slides pass 1920x1080 fixed-stage boundary verification with 0 overflows!");
  }

  // Print PDF
  const pdfPath = path.join(outputDir, `${slug}.pdf`);
  await page.pdf({
    path: pdfPath,
    width: "1920px",
    height: "1080px",
    printBackground: true,
  });

  console.log(`[Export Success] PDF successfully generated at: ${pdfPath}`);
  await browser.close();
}

const targetSlug = process.argv[2] ?? "01_start_your_qa_career";
const serverUrl =
  process.argv[3] ?? process.env.BASE_URL ?? "http://localhost:3005";

exportDeckToPdf(targetSlug, serverUrl).catch((err) => {
  console.error("[Export Error]", err);
  process.exit(1);
});
