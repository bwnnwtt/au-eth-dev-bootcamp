const ethers = require('ethers');
require('dotenv').config();

async function main() {
  const url = process.env.GOERLI_URL;

  let artifacts = await hre.artifacts.readArtifact('ModifyVariable');

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a ModifyVariable Factory
  let factory = new ethers.ContractFactory(
    artifacts.abi,
    artifacts.bytecode,
    wallet
  );

  // constructor arguments to be passed as input parameters into deploy()
  let modifyVariable = await factory.deploy(69, 'HELLO EL');

  console.log('ModifyVariable address:', modifyVariable.address);

  await modifyVariable.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
