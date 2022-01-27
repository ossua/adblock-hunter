const adURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'

/**
 * Check if AdBlocker is present in user's browser
 * @return Promise<Boolean>
 */
const isAdblocking = async () => {
  let enabled = false

  try {
    await fetch(adURL)
  } catch (_) {
    enabled = true
  }

  return enabled
}

export {
  isAdblocking,
}
