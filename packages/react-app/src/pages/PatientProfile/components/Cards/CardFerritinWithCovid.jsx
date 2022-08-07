import React from 'react';
import PropTypes from 'prop-types';

const CardFerritinWithCovid = ({ nft }) => {
  return (
    <div className="border border-minsk rounded-3xl w-full h-2/3">
      <div className="flex justify-center items-center h-full">
        <div>{nft.address}</div>
      </div>
    </div>
  );
};

CardFerritinWithCovid.propTypes = {
  nft: PropTypes.shape().isRequired,
};

export default CardFerritinWithCovid;
