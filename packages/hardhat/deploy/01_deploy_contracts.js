const { getContractFactory } = require("@nomiclabs/hardhat-ethers");

require("dotenv").config();

const skip = () => new Promise((resolve) => resolve(true));

const deploymentScript = async ({ getNamedAccounts, deployments, ethers }) => {
  console.log("\n01_deploy_contracts");

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const dataPackage = await deploy("DataPackage", {
    from: deployer,
    log: true,
    contract: "DataPackage",
  });

  console.log({ address: dataPackage.address})

  const contractFactory = await ethers.getContractFactory("DataPackage");
  const contract = await contractFactory.attach(dataPackage.address);

  await contract.mint(deployer, 'healthmarket');

  console.log("01_deploy_contracts - FINISHED");
};

// deploymentScript.skip = skip;

module.exports = deploymentScript;

module.exports.tags = [];
