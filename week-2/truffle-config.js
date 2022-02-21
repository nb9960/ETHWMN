require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "254161b54c634e27acfcdf2a22293708";
const MNEMONIC = process.env.MNEMONIC

module.exports = {

  networks: {
    goerli: {
      provider: () => {
        return new HDWalletProvider(MNEMONIC, 'https://goerli.infura.io/v3/c27be5d4d1944574b38d2c879eaab1a7')
      },
      network_id: '5', // eslint-disable-line camelcase
      gas: 4465030,
      gasPrice: 10000000000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.11",
    }
  },
};