// Polyfill fetch for Jest/node environment
require('whatwg-fetch');
// Polyfill for TextEncoder in Jest environment
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
