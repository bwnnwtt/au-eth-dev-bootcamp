class TXO {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
    this.spent = false;
  }

  // marks a TXO as spent
  spend() {
    this.spent = true;
  }
}

module.exports = TXO;
