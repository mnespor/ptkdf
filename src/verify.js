const crypto = require('crypto')
const { promisify } = require('util')
const scrypt = promisify(crypto.scrypt)

const decode = require('./decode')

/**
 * Verifies a user-provided password against a stored password.
 * @param {string|Buffer} plaintext User-provided plaintext password.
 * @param {string} hashed Stored hashed password: [salt, key].join(separator)
 *                        where `separator` is a real-looking password in its own right.
 * @returns {bool} True if the plaintext password corresponds to the stored hash.
 */
module.exports = async ({ plaintext, hashed }) => {
    const [encodedSalt, encodedKey] = hashed.split(/[^\u200B\u200C\u200D\u2060]+/)
    const salt = decode(encodedSalt)
    const key = decode(encodedKey)
    const keylen = key.length
    const userKey = await scrypt(plaintext, salt, keylen)
    return userKey.toString('base64') === key.toString('base64')
}
