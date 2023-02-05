const TXO = require('./TXO');

class Transaction {
  inputUTXOs = [];
  outputUTXOs = [];

  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }

  // executes a transaction
  execute() {
    /* check that total input amounts is sufficient to cover the total output amounts
        throw an error if condition is not met
    */
    const inputTotal = this.inputUTXOs
      .map((e) => e.amount)
      .reduce((sum, curr) => sum + curr, 0);
    const outputTotal = this.outputUTXOs
      .map((e) => e.amount)
      .reduce((sum, curr) => sum + curr, 0);
    if (inputTotal < outputTotal) {
      throw new Error('Insufficient input amounts to cover output amounts!');
    }

    // check that inputUTXO is not spent. throw an error if spent
    this.inputUTXOs.forEach((e) => {
      if (e.spent) {
        throw new Error(`${e} is spent!`);
      }
    });

    // spend inputUTXOs if no errors thrown
    this.inputUTXOs.forEach((e) => e.spend());

    // record the fee of this transaction (fee is paid to miner)
    this.fee = inputTotal - outputTotal;
  }
}

module.exports = Transaction;
