# Adblock Hunter 🔫

[![Live Demonstration](https://img.shields.io/badge/LIVE%20DEMO-AVAILABLE-green.svg)](https://blaumaus.github.io/adblock-hunter/public/)

This library enables you to determine whether a user is using an ad blocker or not.

## Installation
```bash
$ npm install --save adblock-hunter
```

## Examples
### NPM:
```javascript
import { isAdblocking } from 'adblock-hunter'

isAdblocking().then((adblocking) => {
  if (adblocking) {
    // an adblocker is present
  }
})

// or

const someFunction = async () => {
  // some of your code here...

  const adblocking = await isAdblocking()
  if (adblocking) {
    // an adblocker is present
  }
}
```

### Browser
```html
<head>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Blaumaus/adblock-hunter/dist/adblock-hunter.js" defer></script>
</head>
<body>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const { isAdblocking } = window['adblock-hunter']

      isAdblocking().then(res => {
        if (res) {
          // Adblock Detected
        }
      })
    })
  </script>
</body>
</html>
```

## API
### `isAdblocking`
`isAdblocking` is a function which makes a call to Google Ads URL and checks wheater the request succeeds (user has no adblock) or not (the adblock is present).\
The returned value is `Promise<Boolean>`.

## Donate
You can support the project by donating me at https://ko-fi.com/andriir
