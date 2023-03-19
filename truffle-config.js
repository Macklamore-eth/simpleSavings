const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'shell view divorce maple pole bird pass nut victory matter valid spin';

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider({
        mnemonic: mnemonic,
        providerOrUrl: 'https://goerli.infura.io/v3/c045c499c82840eea0f5c3c395f8d056',
        addressIndex: 1, // Use the second account derived from the mnemonic
      }),
      network_id: 5, // Goerli testnet network ID
      // ... other configurations ...
    },
  },

  compilers: {
    solc: {
      version: '0.8.0', // or another compatible version, e.g., '0.8.7'
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};




