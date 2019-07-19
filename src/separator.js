const lookupTable = require('./lookupTable')

/**
 * Use a subset of the bytes of `salt` to find a "good" separator.
 * @param {Buffer} salt
 * @returns {string} A string to separate the salt from the derived key.
 */
module.exports = salt => {
    return lookupTable[(((salt[0] || 0) & 0x03) << 8) + (salt[1] || 0)]
}
