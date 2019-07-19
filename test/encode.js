const encode = require('../src/encode')

console.log('encoding works')
const encoded = encode(Buffer.from([0b00011011, 0b11000000]))
if (encoded.length !== 8) {
    console.log(`expected encoded.length to equal 8; actual ${encoded.length}`)
} else {
    console.log('test 0 pass')
}

const expectedEncodedValue = '\u200B\u200C\u200D\u2060\u2060\u200B\u200B\u200B'
if (encoded !== expectedEncodedValue) {
    console.log(`expected encoded value to be ${expectedEncodedValue}; actual ${encoded}`)
} else {
    console.log('test 1 pass')
}
