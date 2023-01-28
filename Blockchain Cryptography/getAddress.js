/*

Bitcoin and Ethereum both have a transformation process to take a public key and turn it into an address. For Bitcoin it includes a checksum and Base58 encoding. Ethereum's address transformation is quite a bit simpler, its address is the last 20 bytes of the hash of the public key.

The important thing to recognize here is that the address is differentiated from the public key, but you can always derive the address if you have the public key.

Exercise: Get the ethereum address from the public key

*/

const secp = require('ethereum-cryptography/secp256k1');
const { keccak256 } = require('ethereum-cryptography/keccak');

// publicKey is Uint8Array
function getAddress(publicKey) {
  // get the first byte off the publicKey. the first byte indicates if the publicKey is in compressed format or not
  var firstByte = publicKey.slice(0, 1);
  // get the keccak hash of the rest of the public key
  var rest = keccak256(publicKey.slice(1));

  // return the last 20 bytes of the keccak hash
  return rest.slice(-20);
}

module.exports = getAddress;
