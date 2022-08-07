import React from 'react';
import PropTypes from 'prop-types';

const CustomerTabs = ({ customerData, setPrice, canMint }) => {
  const [tabsSelected, setTabsSelected] = React.useState('offers');
  const [selectedCustomer, setSelectedCustomer] = React.useState('');

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
        {tabsSelected === 'offers' ? (
          <div>
            <div className="flex justify-between items-center text-sm mb-3">
              <div>Customer</div>
              <div>Price</div>
            </div>
            {customerData.map((customerParam, index) => {
              return (
                <button
                  type="button"
                  className={`${
                    selectedCustomer === index ? 'border border-minsk' : ''
                  } w-full p-2.5 flex justify-between items-center mb-5 h-20 rounded-3xl`}
                  onClick={() => {
                    setPrice(customerParam.offer);
                    setSelectedCustomer(index);
                  }}
                  disabled={!canMint}
                  key={customerParam.offer}
                >
                  <div className="w-2/3 text-left">{customerParam.from}</div>
                  <div className="mr-2">{customerParam.offer}</div>
                </button>
              );
            })}
          </div>
        ) : null}
        {tabsSelected === 'auction' ? (
          <div>Тут будет информация о аукционе</div>
        ) : null}
        {tabsSelected === 'asks' ? (
          <div>Тут будет информация о вопросах</div>
        ) : null}
      </div>
    </div>
  );
};

CustomerTabs.propTypes = {
  customerData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setPrice: PropTypes.func.isRequired,
  canMint: PropTypes.bool.isRequired,
};

export default CustomerTabs;
