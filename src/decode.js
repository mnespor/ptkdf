const lookupTable = {
    '\u200B': 0, // zero-width space
    '\u200C': 1, // zero-width non-joiner
    '\u200D': 2, // zero-width joiner
    '\u2060': 3 // word joiner
}

module.exports = string => {
    if (string.length % 4 !== 0) {
        throw new Error('Expected input string to have length divisible by four')
    }
    const accumulator = []
    for (let i = 0; i < string.length; i+= 4) {
        accumulator.push(
            (lookupTable[string[i]] << 6)
          + (lookupTable[string[i + 1]] << 4)
          + (lookupTable[string[i + 2]] << 2)
          + (lookupTable[string[i + 3]]))
    }

    return Buffer.from(accumulator)
}
