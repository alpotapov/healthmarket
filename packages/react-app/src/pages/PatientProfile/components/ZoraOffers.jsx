/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useEthers, useContractFunction } from '@usedapp/core';

import { ethers } from 'ethers';
import ZoraOffer from './ZoraOffer';

import useOffersForNFT from '../../../hooks/useOffersForNFT';
import useOffers from '../../../hooks/useOffers';
import { abis, addresses } from '../../../contexts/ContractContext';

const ZoraOffers = ({ offers }) => {
  const [itemPrice, setItemPrice] = React.useState('0.00');
  const [selectedOffer, setSelectedOffer] = React.useState('');
  const [selectedOfferId, setSelectedOfferId] = React.useState(0);

  const { library } = useEthers();
  const signer = library && library.getSigner();

  const offerIds = useOffersForNFT();

  const { send, state } = useContractFunction(
    new ethers.Contract(addresses.dataPackage, abis.dataPackage, signer),
    'setApprovalForAll'
  );

  const onApprove = () => {
    console.log('approve');
    send(addresses.ERC721TransferHelper, true);
    send('0x1240ef9f9c56ee981d10cffc6ba5807b6c7fecaa', true);
  };

  const { send: sell, state: sellState } = useContractFunction(
    new ethers.Contract(addresses.offers, abis.offers, signer),
    'fillOffer'
  );

  const onSell = () => {
    console.log('selling');
    sell(
      addresses.dataPackage,
      1,
      selectedOfferId,
      ethers.constants.AddressZero,
      ethers.utils.parseEther(itemPrice),
      ethers.constants.AddressZero
    );
  };
  return (
    <div>
      <div>
        {offerIds &&
          offerIds.map((offerId, index) =>
            offerId ? (
              <ZoraOffer
                offerId={offerId}
                setSelectedOffer={() => setSelectedOffer(index)}
                isSelected={selectedOffer === index}
                setItemPrice={(price) => setItemPrice(price)}
                setSelectedOfferId={() => setSelectedOfferId(offerId)}
                key={offerId.toString()}
              />
            ) : null
          )}
      </div>
      <button
        className="my-10 bg-raspberry flex justify-center p-4 w-full rounded-2xl text-sm text-white font-bold"
        type="button"
        onClick={() => onApprove()}
      >
        Approve
      </button>
      <button
        className={`my-10 flex justify-center p-4 w-full ${
          itemPrice === '0.00' ? 'bg-minsk-grey' : 'bg-raspberry'
        } rounded-2xl text-sm text-white font-bold`}
        type="button"
        disabled={itemPrice === '0.00'}
        onClick={() => onSell()}
      >
        Sell for {itemPrice} ETH
      </button>
    </div>
  );
};

ZoraOffers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ZoraOffers;
