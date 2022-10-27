const USDZ = artifacts.require("USDZ");
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

module.exports = async (deployer) => {
	let minter,
		initialSupply = "1000000000000000000000";
	console.log(`network name: ${deployer.network}`);
	switch (deployer.network) {
		case "bsc":
		case "bsctestnet":
			minter = "0x6a2128B37C95753543a78C4F8C325C86c49e283D";
			break;
		case "development":
		case "test":
		case "soliditycoverage":
			const [testMinter] = await web3.eth.getAccounts();
			minter = testMinter;
			break;
		default:
			throw new Error(`Unknown network: ${deployer.network}`);
	}

	await deployProxy(USDZ, [minter, initialSupply], { deployer });

	const token = await USDZ.deployed();
	console.log(`usdz address: ${token.address}`);
};
