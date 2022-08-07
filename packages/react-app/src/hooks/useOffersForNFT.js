import { useContractCall } from '@usedapp/core';
// import { ethers } from 'ethers';
import { abis, addresses } from '../contexts/ContractContext';

const useOffersForNFT = () => {
  console.log({ dataPackage: addresses.dataPackage });
  const call = {
    address: addresses.offers,
    abi: abis.offers,
    method: 'offersForNFT',
    args: [addresses.dataPackage, 1, 4],
  };

  const results = useContractCall(call) ?? [];

  console.log({ results });

  return results.filter((result) => !!result);
};

export default useOffersForNFT;
