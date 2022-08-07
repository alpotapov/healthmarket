/* eslint-disable no-unused-vars */
import React from 'react';
import { useEthers, useContractFunction } from '@usedapp/core';

import { ethers } from 'ethers';
import PageBase from './PageBase/PageBase';
import { addresses, abis } from '../contexts/ContractContext';

const CreateOffer = () => {
  const { library } = useEthers();
  const signer = library && library.getSigner();

  // eslint-disable-next-line no-unused-vars
  const { send, state } = useContractFunction(
    new ethers.Contract(addresses.offers, abis.offers, signer),
    'createOffer'
  );

  const sendOffer = () => {
    console.log('sending');
    console.log(ethers.constants.AddressZero);
    const value = ethers.utils.parseEther('0.001');
    send(addresses.dataPackage, 1, ethers.constants.AddressZero, 0, 500);
  };

  React.useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <PageBase>
      <button onClick={sendOffer} type="button">
        Create Offer
      </button>
    </PageBase>
  );
};

export default CreateOffer;
