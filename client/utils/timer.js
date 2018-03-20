//add zero padding
function zeroPad(number, size = 2) {
  let str = String(number)
  while (str.length < size) {
    str = '0' + str
  }
  return str
}

function timeFormat(miliseconds) {
  const hh = parseInt((miliseconds / (1000 * 60 * 60)) % 24, 10)
  const mm = parseInt((miliseconds / (1000 * 60)) % 60, 10)
  const ss = parseInt((miliseconds / 1000) % 60, 10)
  const mss = parseInt((miliseconds % 1000) / 100, 10)

  return `${zeroPad(hh)}:${zeroPad(mm)}:${zeroPad(ss)}:${mss}`
}

console.log(timeFormat(60000))
