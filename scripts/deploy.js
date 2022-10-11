
const hre = require("hardhat");

async function main() {
  const XENON = await hre.ethers.getContractFactory("XENON");
  const xenon = await XENON.deploy();

  await xenon.deployed();

  console.log(
    `XENON Contract Deployed At: ${xenon.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
