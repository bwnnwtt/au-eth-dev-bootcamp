const ethers = require('ethers');
const { Wallet, utils } = ethers;
const { wallet1 } = require('./wallets');

const signaturePromise = wallet1.signTransaction({
  value: utils.parseUnits('1', 'ether'), // transfer 1 ETH. actual units is 10^18 wei. use utils for convenience
  //value: utils.parseEther('1') // alternative util to pass 1 ETH
  to: '0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92',
  gasLimit: 21000, // gas limit to transfer ETH in Type 0 (legacy) form
});

module.exports = signaturePromise;
