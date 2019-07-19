const crypto = require('crypto')
const { promisify } = require('util')
const randomBytes = promisify(crypto.randomBytes)
const scrypt = promisify(crypto.scrypt)

const encode = require('./encode')
const separator = require('./separator')

/**
 * Generates a salt of appropriate length, then derives a key
 * @param {string|Buffer} password
 */
module.exports = async ({ password, keylen }) => {
    const saltLength = keylen > 32
          ? Math.floor(keylen * 0.5)
          : 16
    const salt = await randomBytes(saltLength)
    const derivedKey = await scrypt(password, salt, keylen)
    return `${encode(salt)}${separator(salt)}${encode(derivedKey)}`
}
