//require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
const {API_URL, PRIVATE_KEY} = process.env
/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: API_URL,
      accounts:[`${PRIVATE_KEY}`]
    }
  }
};
