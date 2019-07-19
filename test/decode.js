const decode = require('../src/decode')

console.log('decoder tests')
const decoded = decode('\u200B\u200C\u200D\u2060\u2060\u200B\u200B\u200B')
if (decoded.length !== 2) {
    console.log(`expected decoded.length to equal 2; actual ${decoded.length}`)
} else {
    console.log('test 0 pass')
}

if (decoded[0] !== 0b00011011) {
    console.log(`expected decoded[0] to be 0b00011011; actual ${decoded[0]}`)
} else {
    console.log('test 1 pass')
}

if (decoded[1] !== 0b11000000) {
    console.log(`expected decoded[1] to be 0b11000000; actual ${decoded[1]}`)
} else {
    console.log('test 2 pass')
}
