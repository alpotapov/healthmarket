/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';

import useOffers from '../../../hooks/useOffers';

const ZoraOffer = ({
  offerId,
  setSelectedOffer,
  isSelected,
  setItemPrice,
  setSelectedOfferId,
}) => {
  const offer = useOffers(offerId);

  const onSell = () => {};
  console.log({ offer });
  console.log({
    offer,
    amount: offer && ethers.utils.formatEther(offer.amount),
  });
  return (
    <div>
      <div>
        {offer && (
          <button
            type="button"
            className={`${
              isSelected ? 'bg-gray' : ''
            } border-t-1 border-b-2 border-road w-full flex justify-between items-center h-16`}
            onClick={() => {
              setItemPrice(ethers.utils.formatEther(offer.amount));
              setSelectedOffer();
              setSelectedOfferId();
            }}
            key={offer.from}
          >
            <div className="text-raspberry font-bold text-sm">
              {ethers.utils.formatEther(offer.amount)} ETH
            </div>
            <div className="test-sm w-2/4 text-left">
              Technical University of Munich
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

ZoraOffer.propTypes = {
  offerId: PropTypes.shape().isRequired,
  setSelectedOffer: PropTypes.func.isRequired,
  setItemPrice: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSelectedOfferId: PropTypes.func.isRequired,
};

export default ZoraOffer;
