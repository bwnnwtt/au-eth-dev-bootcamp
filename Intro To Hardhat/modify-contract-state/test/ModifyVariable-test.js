// import testing libraries: https://www.chaijs.com/guide/styles/
const { expect, assert } = require('chai');

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe('TestModifyVariable', function () {
  let ModifyVariable;
  let contract;

  before(async () => {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    ModifyVariable = await ethers.getContractFactory('ModifyVariable');

    // we then use the ContractFactory object to deploy an instance of the contract
    contract = await ModifyVariable.deploy(10, 'default string');

    // wait for contract to be deployed and validated!
    await contract.deployed();
  });

  it('should change x to 1337', async function () {
    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();
    // getter for state variable x
    const newX = await contract.x();
    assert.equal(newX.toNumber(), 1337);
  });

  it('should modify str', async function () {
    await contract.modifyString();
    const newStr = await contract.str();
    assert.equal(newStr.toString(), 'string is modified');
  });
});
