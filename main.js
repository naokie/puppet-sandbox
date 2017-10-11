const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

const templates = [
  'https://yahoo.com/',
];

(async() => {

const browser = await puppeteer.launch({
  ignoreHTTPSErrors: true
});
const page = await browser.newPage();

// await page.emulate(devices['iPhone 6']);
await page.setExtraHTTPHeaders({
  'Accept-Language': 'ja'
});
// await page.setUserAgent('Mozilla/5.0 (Nintendo Switch; LoginApplet) AppleWebKit/1.0.0 (KHTML, like Gecko) NF/1.0.0 NintendoBrowser/5.1.0.0');
await page.setViewport({
  width: 1024,
  height: 768
});

for (let template of templates) {
  const splitedTemplateName = template.split('/');
  const imageName = splitedTemplateName[splitedTemplateName.length - 1] + '.png';
  console.log(`capturing: ${imageName}`);

  await page.goto(`${template}`);
  await page.screenshot({
    path: `./test/pc/before/${imageName}`,
    fullPage: true
  });
}

await browser.close();

})();
