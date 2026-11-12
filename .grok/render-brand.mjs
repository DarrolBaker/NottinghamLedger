import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto(pathToFileURL("/workspace/.grok/og-card.html").href, {
  waitUntil: "load",
});
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(150);
await page.screenshot({
  path: "/workspace/.grok/og-raw.png",
  type: "png",
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

const icon = await browser.newPage({
  viewport: { width: 128, height: 128 },
  deviceScaleFactor: 1,
});
await icon.goto(pathToFileURL("/workspace/.grok/favicon.svg").href, {
  waitUntil: "load",
});
await icon.screenshot({
  path: "/workspace/.grok/favicon-128.png",
  type: "png",
  clip: { x: 0, y: 0, width: 128, height: 128 },
});

const tiny = await browser.newPage({
  viewport: { width: 16, height: 16 },
  deviceScaleFactor: 4,
});
await tiny.goto(pathToFileURL("/workspace/.grok/favicon.svg").href, {
  waitUntil: "load",
});
await tiny.screenshot({
  path: "/workspace/.grok/favicon-16x4.png",
  type: "png",
  clip: { x: 0, y: 0, width: 64, height: 64 },
});

await browser.close();
console.log("rendered");
