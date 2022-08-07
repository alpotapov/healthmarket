/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import artifacts from '../contracts/hardhat_contracts.json';
import ERC20ABI from '../web3utilities/interfaces/ERC20.json';
import OffersAbi from './OffersAbi.json';

const chainNames = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
  137: 'matic',
  31337: 'localhost',
};

const offers = {
  4: '0x1240ef9f9c56ee981d10cffc6ba5807b6c7fecaa',
};

const transferHelper = {
  4: '0x029AA5a949C9C90916729D50537062cb73b5Ac92',
};

const defaultNetworkId = 31337;
const defaultNetworkName = 'localhost';
const chainId = process.env.REACT_APP_NETWORK_ID;
const chainName = chainNames[chainId];
const { contracts } = artifacts[defaultNetworkId][defaultNetworkName];
const dataPackage = artifacts[chainId][chainName].contracts.DataPackage;

const erc20Interface = new ethers.utils.Interface(ERC20ABI);
const dataPackageInterface = new ethers.utils.Interface(
  contracts.DataPackage.abi
);
const offersInterface = new ethers.utils.Interface(OffersAbi);

export const abis = {
  erc20: erc20Interface,
  dataPackage: dataPackageInterface,
  offers: offersInterface,
};

export const addresses = {
  dataPackage: dataPackage.address,
  offers: offers[chainId],
  ERC721TransferHelper: transferHelper[chainId],
};
