/*
Exercise: hash a message
*/

const { keccak256 } = require('ethereum-cryptography/keccak');
const { utf8ToBytes } = require('ethereum-cryptography/utils');

// returns the hash of the input message
function hashMessage(message) {
  return keccak256(utf8ToBytes(message));
}

module.exports = hashMessage;
