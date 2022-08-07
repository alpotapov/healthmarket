import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

import Blood from '../../assets/Blood.svg';
import NoCovid from '../../assets/NoCovid.svg';
import Male from '../../assets/Male.svg';

const CardFerritinNoCovid = ({ nft }) => {
  console.log(nft);
  return (
    <div className={`${css.card_shadow} rounded-3xl w-full h-2/3`}>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center w-28">
          <div className="flex pb-3.5">
            <img className="pr-2" src={Blood} alt="Blood" />
            <img src={NoCovid} alt="NoCovid" />
          </div>
          <div className="text-xl font-bold text-raspberry">Ferritin</div>
          <div className="text-xl font-bold text-minsk-grey">Covid -</div>
        </div>
        <div className="flex flex-col justify-center items-end w-40 h-full border-l border-road text-base font-medium pr-8">
          <div className="pb-3">20-30 years</div>
          <div className="flex items-center justify-center">
            <img src={Male} alt="Male" />
            <div className="text-blue pl-3">Male</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardFerritinNoCovid.propTypes = {
  nft: PropTypes.shape().isRequired,
};

export default CardFerritinNoCovid;
