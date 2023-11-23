
const { TextDecoder, TextEncoder } = require(`util`);

if (TextDecoder && TextEncoder) {
    global.TextDecoder = TextDecoder
    global.TextEncoder = TextEncoder
}