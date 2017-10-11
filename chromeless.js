const path = require('path');
const { Chromeless } = require('chromeless');

async function run() {
  const chromeless = new Chromeless();

  const screenshot = await chromeless
    .goto('https://www.google.com/')
    .screenshot({
      filePath: path.join(__dirname, 'google.png')
    });

  console.log(screenshot);

  await chromeless.end();
}

run().catch(console.error.bind(console));
