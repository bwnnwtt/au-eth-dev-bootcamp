const Block = require('./Block');

class Blockchain {
  constructor() {
    this.chain = [new Block('genesis block')];
  }

  addBlock(Block) {
    let prevBlock = this.chain[this.chain.length - 1];
    Block.previousHash = prevBlock.toHash();
    this.chain.push(Block);
  }

  isValid() {
    for (let i = 0; i < this.chain.length - 1; i++) {
      let prevBlock = this.chain[i];
      let currBlock = this.chain[i + 1];
      if (prevBlock.toHash().toString() !== currBlock.previousHash.toString()) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Blockchain;
