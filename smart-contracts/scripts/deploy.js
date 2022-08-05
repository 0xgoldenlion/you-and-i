const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const SongStorage = await hre.ethers.getContractFactory("SongStorage");
  const songStorage = await SongStorage.deploy();

  await songStorage.deployed();

  console.log("SongStorage deployed to:", songStorage.address);

  fs.writeFileSync(
    "././songStorage.js", `
    export const songStorage = "${songStorage.address}"`
  )

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//npx hardhat verify CONTRACT_ADDR --network mumbai
//npx hardhat verify 0xA20aa0968C555cf984B52D530586108856a0A134 --network mumbai
