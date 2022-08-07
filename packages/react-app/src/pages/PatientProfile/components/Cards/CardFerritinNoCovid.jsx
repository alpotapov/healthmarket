import React from 'react';
import PropTypes from 'prop-types';

const CardFerritinNoCovid = ({ nft }) => {
  return (
    <div className="border border-minsk rounded-3xl w-full h-2/3">
      <div className="flex justify-center items-center h-full">
        <div>{nft.address}</div>
      </div>
    </div>
  );
};

CardFerritinNoCovid.propTypes = {
  nft: PropTypes.shape().isRequired,
};

export default CardFerritinNoCovid;
