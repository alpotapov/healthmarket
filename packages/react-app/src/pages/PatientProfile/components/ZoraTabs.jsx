import React from 'react';
import PropTypes from 'prop-types';

import ZoraOffers from './ZoraOffers';

const ZoraTabs = ({ offers }) => {
  const [tabsSelected, setTabsSelected] = React.useState('offers');

  return (
    <div>
      <div className="flex justify-around items-center pb-10 border-b-2 border-road">
        <button
          className={
            tabsSelected === 'offers'
              ? 'text-sm text-raspberry border border-raspberry rounded-full w-20'
              : 'text-sm text-road bg-dark-gray rounded-full w-20'
          }
          type="button"
          onClick={() => setTabsSelected('offers')}
        >
          Offers
        </button>
        <button
          className={
            tabsSelected === 'auction'
              ? 'text-sm text-raspberry border border-raspberry rounded-full w-20'
              : 'text-sm text-road bg-dark-gray rounded-full w-20'
          }
          type="button"
          onClick={() => setTabsSelected('auction')}
        >
          Auction
        </button>
        <button
          className={
            tabsSelected === 'asks'
              ? 'text-sm text-raspberry border border-raspberry rounded-full w-20'
              : 'text-sm text-road bg-dark-gray rounded-full w-20'
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
