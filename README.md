# Code Your Own CryptoCurrency

## Methods
```js
// Truffle console methods
web3.eth.getAccounts();
web3.eth.defaultAccount;
web3.eth.defaultBlock();
web3.eth.providers();
web3.eth.accounts
```
[web3.js Documentation](https://web3js.readthedocs.io/en/v1.3.4/web3-eth.html)

## Running The Scripts
```
# Open Bash Terminal
$ truffle migrate --reset
$ truffle console

# In Truffle Console
$ BigBrainToken.deployed().then(function(i) {token=i;})
$ token.address
$ token.totalSupply().then(function(s) {totalSupply = s;})
$ totalSupply.toNumber()
```

## References
[Youtube Tutorial](https://www.youtube.com/watch?v=XdKv5uwEk5A)
[Ethereum EC20 Standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)
[Solidity - Introduction](https://docs.soliditylang.org/en/v0.8.2/introduction-to-smart-contracts.html)
[Solidity Global Available Variables](https://docs.soliditylang.org/en/v0.8.2/units-and-global-variables.html?highlight=units%20and%20global%20variables)
[Solidity Sample Contract](https://docs.soliditylang.org/en/v0.8.2/solidity-by-example.html?highlight=balanceOf)

## Dependencies
1. Node
2. Ganache from [Truffle Website](https://www.trufflesuite.com/ganache)
```
$ npm i -g truffle
```
