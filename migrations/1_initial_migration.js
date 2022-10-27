const Migrations = artifacts.require("Migrations");

module.exports = async (deployer) => {
	deployer.deploy(Migrations);
	const [deployerAccount] = await web3.eth.getAccounts();
	//const [deployerAccount] = await web3.eth.getAccounts();
	// const nonce = await web3.eth.getTransactionCount(deployerAccount);
	console.log(`Deploying address: ${deployerAccount}`);
};
