import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { network } from "hardhat";

const func: DeployFunction = async function (hre) {
  const { getNamedAccount, deployements } = hre;
  const { deployer } = await getNamedAccount();
  const chainId = network.config.chainId;
};
export default func;
