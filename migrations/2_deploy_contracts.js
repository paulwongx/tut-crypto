const BigBrainToken = artifacts.require("./contracts/BigBrainToken.sol");

module.exports = function (deployer) {
  deployer.deploy(BigBrainToken, 1000000);
};
