const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "";

module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	plugins: ["truffle-plugin-verify", "solidity-coverage"],
	api_keys: {
		bscscan: "",
	},
	networks: {
		development: {
			host: "127.0.0.1", // Localhost (default: none)
			port: 7545, // Standard Ethereum port (default: none)
			network_id: "*", // Any network (default: none)
		},
		bsctestnet: {
			networkCheckTimeout: 999999999,
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					`https://data-seed-prebsc-2-s1.binance.org:8545/`
				),
			network_id: 97,
			confirmations: 5,
			timeoutBlocks: 200,
			gas: 8000000,
			skipDryRun: true,
		},
		bsc: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					`wss://binance-protocol-01.ankr.com/ws`
				),
			chain_id: 56,
			network_id: 56,
			confirmations: 5,
			timeoutBlocks: 50,
			skipDryRun: true,
			networkCheckTimeout: 10000000,
			websockets: true,
		},
	},
	compilers: {
		solc: {
			version: "0.8.16",
		},
	},
};
