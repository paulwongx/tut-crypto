const BigBrainToken = artifacts.require("./BigBrainToken.sol");

module.exports = function (deployer) {
  deployer.deploy(BigBrainToken, 1000000);
};
