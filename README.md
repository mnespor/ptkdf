# ptkdf: Plaintext key derivation function
Better Security Through Obscurity

> I think it’s best to store passwords in plain text, but use a really strange algorithm to convert them, so they look like real passwords. Like `Password1` is changed to `SexyTime!`
> Then hackers will be like, “YES! I GOT IT!” but none of the passwords will work.

## What

The real salt and derived key are encoded into zero-width characters: The zero-width space, the zero-width non-joiner, the zero-width joiner, and the word joiner. A realistic-sounding password (derived from the salt) separates the salt and derived key in storage.

## Usage

```
const ptkdf = require('ptkdf')
const hashed = await ptkdf.create({ password: 'God', keylen: 32 })
// hashed = '⁠‍​​⁠‌‌​‍‍​‍​​​⁠‍⁠‍‌​‍⁠‌‍‌​‌⁠‍⁠⁠​​‌​⁠‌​‌‌​​‍‍‍‌​⁠‌⁠‌​⁠‌‍​⁠‌​‌‍​‍thx1138‍⁠​‌‌‍‍‌​‍‌⁠⁠‌‍⁠‌‍‌⁠‍‍⁠‍‍​‌⁠‌​‌‌⁠‌‍‍‍‍⁠‍​‍‌⁠​‌‍​‍‌‌‍⁠​‍​‌​‌⁠⁠‌‌‍​​‍​​‌‍‌⁠‌‍⁠‌‌‍‍​⁠​​‍‍​⁠⁠‍​⁠​‍⁠‍‌‌​⁠‌​​‌‍​​‍⁠‍⁠⁠‌​​‍‍‌⁠​⁠‍‌‍‍⁠‍'
let authenticated = await ptkdf.verify({ plaintext: 'God', hashed })
// authenticated = true
authenticated = await ptkdf.verify({ plaintext: 'thx1138', hashed })
// authenticated = false
```
## Examples

| password | derived key                                            |
|----------|--------------------------------------------------------|
| love     | ⁠‌‌‌‍​‌​‍‍​‌‌​‍⁠‍⁠​⁠‍‍‍‍‌‌‌​⁠‍​⁠‌​⁠⁠​‍‌⁠​⁠​​‍⁠‍‍⁠‍‍‌‍‌‌‌‍⁠​‍​‌​‍birdie‍‌⁠⁠‌‌​​⁠‌​⁠​‌​‌‌​⁠‌‌‍⁠​⁠‍‍‍⁠‌​⁠⁠‍‌​‍⁠‍‌​⁠​⁠⁠⁠‌‌​⁠​⁠‍⁠​‍‍⁠​‌‌‌‍⁠⁠‌‌​‌⁠‍‍‌‌‍‍‍⁠‍​​‍‍‌​‌‍‍⁠‍‍‍‍⁠‍‍​‍‍⁠⁠‌‍‌⁠​​‍⁠‍‌⁠​‍‌​​‍​⁠‌⁠​⁠​⁠‍‌      |
| sex      | ⁠​​​‍‌‍‌‍‍‍⁠​​‍​⁠‌‍⁠‍‌‍⁠⁠‌‍‍​‍‌‍‍‍​‌‌‍‍⁠‌​‌‌⁠​⁠‍‍‌‍⁠‌⁠‍⁠​⁠‌‌‌​⁠⁠xxxxxx‍‌⁠‌‍⁠‍‌‌‌‍⁠‌⁠⁠‌‌‍⁠⁠⁠⁠‍‍‍⁠‍​⁠‍​‌‍​⁠‌⁠‌⁠‌⁠​⁠⁠‌‍‍​​​‌⁠⁠​‌​‌‌​​⁠​⁠‌​⁠‌‍‍‍‍‌⁠‌⁠‍⁠⁠‌⁠​‍⁠‌‌‌‍​‌⁠​⁠‌⁠⁠⁠​‍⁠⁠⁠⁠‍​‌​⁠⁠‍‌‍⁠⁠​​‌‍​‌‍‌​‌​​‌​      |
| secret   | ‌​‌‌⁠‌⁠‌‍​⁠‍⁠‌​​​⁠​⁠‍‍‍⁠‌⁠⁠⁠‌⁠⁠⁠​‌‍​​​​‌⁠⁠​​⁠​‍​‍‍‌​‌​‍‌‍‍​‍⁠⁠⁠boobs‍‍‌‍‍‍‌​​⁠‌​​⁠⁠⁠​​⁠‌‌​‍‍⁠⁠‍⁠​‍‌⁠​‍‌​⁠​⁠⁠‌⁠‌⁠​​‍‌‌​‌⁠‍⁠⁠‍⁠‍‍‌‍⁠​​​‍‌‍⁠⁠​‌‍‌​‌‌‌‌⁠⁠⁠⁠⁠⁠​‌‍‍‌‍‌‍​‌‌‌​⁠​‍​‍​‍​⁠‍​‍​⁠⁠‍‍‍⁠‍‌​​‌‌‍⁠‍‍​       |
| God      | ⁠‍​​⁠‌‌​‍‍​‍​​​⁠‍⁠‍‌​‍⁠‌‍‌​‌⁠‍⁠⁠​​‌​⁠‌​‌‌​​‍‍‍‌​⁠‌⁠‌​⁠‌‍​⁠‌​‌‍​‍thx1138‍⁠​‌‌‍‍‌​‍‌⁠⁠‌‍⁠‌‍‌⁠‍‍⁠‍‍​‌⁠‌​‌‌⁠‌‍‍‍‍⁠‍​‍‌⁠​‌‍​‍‌‌‍⁠​‍​‌​‌⁠⁠‌‌‍​​‍​​‌‍‌⁠‌‍⁠‌‌‍‍​⁠​​‍‍​⁠⁠‍​⁠​‍⁠‍‌‌​⁠‌​​‌‍​​‍⁠‍⁠⁠‌​​‍‍‌⁠​⁠‍‌‍‍⁠‍     |
