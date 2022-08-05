require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  settings: {
    optimizer: {
      enabled: true,
      runs: 3000
    },
  },
  networks: {
    mumbai: {
      url: process.env.MUMBAI,
      accounts: [process.env.MNENOMIC],

    },
  },
  etherscan: {           
    apiKey: process.env.POLYGONSCAN,
  }
};
