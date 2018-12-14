// Using dotenv
require('dotenv').config();

// Build and configure the logic for the HDWalletProvider regardless of being infura or otherwise
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonicProvider = (mnemonic, rpcEndpoint) => new HDWalletProvider(mnemonic, rpcEndpoint);
const infuraProvider = network => mnemonicProvider(process.env.MNEMONIC || '', `https://${network}.infura.io/v3/${process.env.INFURA_APIKEY}`);

// Following create the mainnet and ropsten providers for infura
const ropstenProvider = infuraProvider('ropsten');
const mainnetProvider = infuraProvider('mainnet');

/**
 * @title module.exports
 * @dev Truffle configuration sections
 * 
 * Network:
 * - development: Deployment path on port 8545 (geth/ganache/rpc)
 * - ganachecli: Deployment path on port 7545 (ganache-cli)
 * - ropten: Deployment on the Ethereum ropsten test network (powered-by infura)
 * - mainnet: Deployment on the Ethereum main network (powered-by infura)
 *
 * rpc:
 * - host: server to connect to for rpc connection
 * - port: server port used to accept rpc connections
 *
 * Solc
 * - optimizer: should the optimizer be used (true/false)
 * - runs: number of times the optimizer shold be run 
 */
module.exports = {
	networks: {
		development: {
			host: 'localhost',
			port: 8545,
			network_id: '*', // eslint-disable-line camelcase
		},
		ganachecli: {
			host: 'localhost',
			port: 7545,
			network_id: '*', // eslint-disable-line camelcase
		},
		ropsten: {
			provider: ropstenProvider,
			network_id: 3,
		},
		mainnet: {
			provider: mainnetProvider,
			network_id: 1,
		},
	},
	rpc: {
		host: "127.0.0.1",
		port: 8080
	},
	solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	}
};
