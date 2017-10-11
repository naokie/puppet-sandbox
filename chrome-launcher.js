const chromeLauncher = require('chrome-launcher');

const launchChrome = (headless = true) => {
  chromeLauncher.launch({
    startingUrl: 'https://www.yahoo.co.jp/',
    chromeFlags: [
      headless ? '--headless' : '',
      '--disable-gpu',
      '--window-size=800,600',
      '--screenshot',
    ],
  }).then(chrome => {

  });
};

launchChrome(true);
