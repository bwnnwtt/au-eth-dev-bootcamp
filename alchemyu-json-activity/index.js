const axios = require('axios');
const hashMessage = require('../Blockchain Cryptography/hashMessage');
const { sha256 } = require('ethereum-cryptography/sha256');
const { toHex, utf8ToBytes } = require('ethereum-cryptography/utils');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL =
  'https://eth-goerli.g.alchemy.com/v2/-Qiw1LVAFIn6WuGZxDF9HxU_DAKEtmzM';

const blockNumber = 8457575;
const blockHexNumber = '0x' + blockNumber.toString(16);

axios
  .post(ALCHEMY_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBlockTransactionCountByNumber',
    params: [blockHexNumber],
  })
  .then((response) => {
    let result = response.data.result.slice(2);
    console.log(parseInt(result, 16));
  });
