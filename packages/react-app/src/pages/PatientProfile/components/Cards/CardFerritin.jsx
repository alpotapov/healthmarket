import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const CardFerritin = ({ nft }) => {
  return (
    <div className={`${css.card_shadow} rounded-3xl w-full h-2/3`}>
      <div className="flex justify-center items-center h-full">
        <div>{nft.address}</div>
      </div>
    </div>
  );
};

CardFerritin.propTypes = {
  nft: PropTypes.shape().isRequired,
};

export default CardFerritin;
