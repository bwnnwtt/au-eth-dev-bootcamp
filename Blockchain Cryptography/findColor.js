/*
Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the COLORS array.

To take the hash of a color, first use utf8ToBytes to translate the string to bytes. Then, use sha256 to hash it
*/

const { sha256 } = require('ethereum-cryptography/sha256');
const { toHex, utf8ToBytes } = require('ethereum-cryptography/utils');

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
  for (color of COLORS) {
    var hashValue = sha256(utf8ToBytes(color));

    if (toHex(hashValue) === toHex(hash)) {
      return color;
    }
  }

  return null;
}

module.exports = findColor;
