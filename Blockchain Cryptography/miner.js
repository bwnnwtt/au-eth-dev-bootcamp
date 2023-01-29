const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // add transaction to mempool
  mempool.push(transaction);
}

// mine a block
function mine() {
  const transactions = [];

  // from mempool, add up to MAX_TRANSACTIONS into the block
  while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
    transactions.push(mempool.pop());
  }

  var nonce = 0;
  // add the id to the block. id equals to the block height
  const block = { id: blocks.length };
  block.transactions = transactions;
  block.nonce = nonce;

  var hash = SHA256(JSON.stringify(block));

  // change the nonce until the hash of the block is less than the TARGET_DIFFICULTY
  while (BigInt(`0x${hash}`) >= TARGET_DIFFICULTY) {
    block.nonce = nonce++;
    hash = SHA256(JSON.stringify(block));
  }

  block.hash = SHA256(JSON.stringify(block));

  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
