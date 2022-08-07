import React from 'react';
import PropTypes from 'prop-types';

import ZoraOffers from './ZoraOffers';

const ZoraTabs = ({ offers }) => {
  const [tabsSelected, setTabsSelected] = React.useState('offers');

  return (
    <div className="mt-8">
      <div className="flex justify-around items-center mb-5">
        <button
          className={
            tabsSelected === 'offers' ? 'underline text-minsk font-bold' : ''
          }
          type="button"
          onClick={() => setTabsSelected('offers')}
        >
          Offers
        </button>
        <button
          className={
            tabsSelected === 'auction' ? 'underline text-minsk font-bold' : ''
          }
          type="button"
          onClick={() => setTabsSelected('auction')}
        >
          Auction
        </button>
        <button
          className={
            tabsSelected === 'asks' ? 'underline text-minsk font-bold' : ''
          }
          type="button"
          onClick={() => setTabsSelected('asks')}
        >
          Asks
        </button>
      </div>

      <div>
        {tabsSelected === 'offers' ? <ZoraOffers offers={offers} /> : null}
        {tabsSelected === 'auction' ? (
          <div>Auction is not yet implemented</div>
        ) : null}
        {tabsSelected === 'asks' ? (
          <div>Asks are not yet implemented</div>
        ) : null}
      </div>
    </div>
  );
};

ZoraTabs.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ZoraTabs;
