/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import CardFerritinWithCovid from './Cards/CardFerritinWithCovid';
import CardFerritinNoCovid from './Cards/CardFerritinNoCovid';
import CardFerritin from './Cards/CardFerritin';

const render = (nft, index) => {
  const stack = [
    <CardFerritinWithCovid nft={nft} />,
    <CardFerritinNoCovid nft={nft} />,
    <CardFerritin nft={nft} />,
  ];

  return stack[index];
};

const DataPackageCard = ({ nft, index }) => {
  if (![0, 1, 2].includes(index)) {
    return null;
  }
  return render(nft, index);
};

DataPackageCard.propTypes = {
  nft: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};

export default DataPackageCard;
