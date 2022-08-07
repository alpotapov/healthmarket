import React from 'react';
import PropTypes from 'prop-types';

const ZoraOffers = ({ offers }) => {
  const [itemPrice, setItemPrice] = React.useState('0.00');
  const [selectedOffer, setSelectedOffer] = React.useState('');

  const onSell = () => {};
  return (
    <div>
      <div>
        {offers.map((offer, index) => {
          return (
            <button
              type="button"
              className={`${
                selectedOffer === index ? 'bg-gray' : ''
              } border-t-1 border-b-2 border-road w-full flex justify-between items-center h-16`}
              onClick={() => {
                setItemPrice(offer.price);
                setSelectedOffer(index);
              }}
              key={offer.from}
            >
              <div className="text-raspberry font-bold text-sm">
                {offer.price}
              </div>
              <div className="test-sm w-2/4 text-left">{offer.from}</div>
            </button>
          );
        })}
      </div>
      <button
        className={`my-10 flex justify-center p-4 w-full ${
          itemPrice === '0.00' ? 'bg-minsk-grey' : 'bg-raspberry'
        } rounded-2xl text-sm text-white font-bold`}
        type="button"
        disabled={itemPrice === '0.00'}
        onClick={() => onSell}
      >
        Sell for {itemPrice}
      </button>
    </div>
  );
};

ZoraOffers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ZoraOffers;
