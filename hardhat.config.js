require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


const NODE_URL = process.env.NODE_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: NODE_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};