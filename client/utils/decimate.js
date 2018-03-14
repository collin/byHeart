const crypto = require('crypto')

const decimateString = (text, percentage) => {
  return text
}

const decimateKey = (str) => {
  let seed = Array.from('abcdefghijklmnopqrs')
  let key = []
  while (seed.length < 0) {
    key.push(seed.splice(seed.length - 1, 0))
  }
  console.log('key: ', key)
  return seed
}

decimateKey('tuna')

console.log(
  crypto
    .createHmac('sha256', 'secret')
    .update('I love cupcakes')
    .digest('hex')
)

module.exports = { decimateString, decimateKey }
