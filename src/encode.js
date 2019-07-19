module.exports = buffer => {
    // TODO: Encode to non-printing characters
    return buffer.toString('base64')
}
