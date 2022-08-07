import { useContractCall } from '@usedapp/core';
// import { ethers } from 'ethers';
import { abis, addresses } from '../contexts/ContractContext';

const useOffer = (offerId) => {
  console.log({ offerId });
  const call = offerId && {
    address: addresses.offers,
    abi: abis.offers,
    method: 'offers',
    args: [addresses.dataPackage, 1, offerId],
  };

  const result = useContractCall(call) ?? [];

  console.log({ singleOffer: result });

  return result.length > 0 ? result : undefined;
};

export default useOffer;
