const provider = require('./provider');

async function getTotalBalance(addresses) {
  let requests = [];
  for (let i = 0; i < addresses.length; i++) {
    let request = {};
    request.jsonrpc = '2.0';
    request.id = i + 1;
    request.method = 'eth_getBalance';
    request.params = [addresses[i], 'latest'];
    requests.push(request);
  }

  const responses = await provider.send(requests);

  // return the total balance of all the addresses
  return responses
    .map((e) => parseInt(e.result.slice(2), 16))
    .reduce((sum, curr) => sum + curr, 0);
}

module.exports = getTotalBalance;
