# Adblock Hunter 🔫
This library enables you to determine whether a user is using an ad blocker or not.

## Installation
```bash
$ npm install --save adblock-hunter
```

## Examples
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

## API
### `isAdblocking`
`isAdblocking` is a function which makes a call to Google Ads URL and checks wheater the request succeeds (user has no adblock) or not (the adblock is present).\
The returned value is `Promise<Boolean>`.

## Donate
You can support the project by donating me at https://ko-fi.com/andriir
