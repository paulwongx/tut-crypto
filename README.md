# Code Your Own CryptoCurrency

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

## Dependencies
1. Node
2. Ganache from [Truffle Website](https://www.trufflesuite.com/ganache)
```
$ npm i -g truffle
```
