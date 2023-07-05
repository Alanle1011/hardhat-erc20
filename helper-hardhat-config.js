const { parseEther } = require("ethers")
const { ethers } = require("hardhat")

const networkConfig = {
  11155111: {
    name: "sepolia",
  },
  31337: {
    name: "localhost",
  },
  31337: {
    name: "hardhat",
  },
}

const developmentChains = ["hardhat", "localhost"]
INITIAL_SUPPLY = "1000000000000000000000000"

module.exports = {
  networkConfig,
  developmentChains,
  INITIAL_SUPPLY,
}
