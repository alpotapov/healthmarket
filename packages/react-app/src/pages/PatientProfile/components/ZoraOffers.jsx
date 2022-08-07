import React from 'react';
import PropTypes from 'prop-types';

const ZoraOffers = ({ offers }) => {
  const [itemPrice, setItemPrice] = React.useState('0.00');
  const [selectedOffer, setSelectedOffer] = React.useState('');

  const onSell = () => {};
  return (
    <div>
      <div>
        <div className="flex justify-between items-center text-sm mb-3">
          <div>Customer</div>
          <div>Price</div>
        </div>
        {offers.map((offer, index) => {
          return (
            <button
              type="button"
              className={`${
                selectedOffer === index ? 'border border-minsk' : ''
              } w-full p-2.5 flex justify-between items-center mb-5 h-20 rounded-3xl`}
              onClick={() => {
                setItemPrice(offer.price);
                setSelectedOffer(index);
              }}
              key={offer.from}
            >
              <div className="w-2/3 text-left">{offer.from}</div>
              <div className="mr-2">{offer.price}</div>
            </button>
          );
        })}
      </div>
      <button
        className={`flex justify-center p-4 w-full ${
          itemPrice === '0.00' ? 'bg-minsk-grey' : 'bg-minsk'
        } bg-minsk rounded-full text-base text-white font-bold`}
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
