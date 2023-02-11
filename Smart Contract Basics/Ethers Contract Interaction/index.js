const ethers = require('ethers');

/**
 * Modify the `value` stored in the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise of transaction
 */
async function setValue(contract) {
  return await contract.modify(1);
}

/**
 * Transfer funds on the contract from the current signer
 * to the friends address
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @param {string} friend - a string containing a hexadecimal ethereum address
 * @return {promise} a promise of the transfer transaction
 */
async function transfer(contract, friend) {
  return await contract.transfer(friend, 69);
}

/**
 * Set the message on the contract using the signer passed in
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @param {ethers.types.Signer} signer - ethers.js signer instance
 * @return {promise} a promise of transaction modifying the `message`
 */
async function setMessage(contract, signer) {
  const user = await contract.connect(signer);
  return await user.modify('this is a new message');
}

/**
 * Deposit at least 1 ether into the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise of the deposit transaction
 */
async function deposit(contract) {
  return await contract.deposit({ value: ethers.utils.parseEther('1') });
}

module.exports = { deposit, setMessage, transfer, setValue };
