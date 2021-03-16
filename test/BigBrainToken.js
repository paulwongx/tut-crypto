const BigBrainToken = artifacts.require('./BigBrainToken');

contract('BigBrainToken', accounts => {
	let tokenInstance;

	it('sets the total supply upon development', () => {
		return BigBrainToken.deployed()
			.then(instance => {
				tokenInstance = instance;
				return tokenInstance.totalSupply();
			})
			.then(totalSupply => {
				assert.equal(
					totalSupply.toNumber(),
					1000000,
					'sets the total supply to 1,000,000'
				);
                // console.log(tokenInstance.balanceOf(accounts));
				return tokenInstance.balanceOf(accounts[0]);
			})
			.then(adminBalance => {
				assert.equal(
					adminBalance.toNumber(),
					1000000,
					'it allocates the inital supply to the admin account'
				);
			});
	});
});
