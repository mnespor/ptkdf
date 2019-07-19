const lookupTable = [
    '\u200B', // zero-width space
    '\u200C', // zero-width non-joiner
    '\u200D', // zero-width joiner
    '\u2060' // word joiner
]

module.exports = buffer => {
    let accumulator = ''
    for (const byte of buffer) {
        const dibit0 = (byte & 0b11000000) >> 6
        const dibit1 = (byte & 0b00110000) >> 4
        const dibit2 = (byte & 0b00001100) >> 2
        const dibit3 = byte & 0b00000011
        accumulator += `${lookupTable[dibit0]}${lookupTable[dibit1]}${lookupTable[dibit2]}${lookupTable[dibit3]}`
    }

    return accumulator
}
