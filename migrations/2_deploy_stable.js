const USDZ = artifacts.require("USDZ");
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

module.exports = async (deployer) => {
	let minter, initialSupply;
	switch (deployer.network) {
		case "bsc":
			minter = "";
			break;
		case "bsctestnet":
			minter = "";
			break;
		case "development":
		case "test":
		case "soliditycoverage":
			break;
		default:
			throw new Error(`Unknown network: ${deployer.network}`);
	}

	await deployProxy(USDZ, [minter], { deployer });

	const token = await USDZ.deployed();
	console.log(`usdz address: ${token.address}`);
	await token.mint(minter, initialSupply);
};
