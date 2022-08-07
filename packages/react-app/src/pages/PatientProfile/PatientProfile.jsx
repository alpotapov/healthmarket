import React from 'react';
import PageBase from '../PageBase/PageBase';
import CustomerTabs from './components/CustomerTabs';

import dataPatient from '../../slides.json';

const PatientProfile = () => {
  const [itemPrice, setItemPrice] = React.useState('0.00');
  const [sliderCounter, setSliderCounter] = React.useState(0);

  if (sliderCounter < 0) {
    return setSliderCounter(dataPatient.length - 1);
  }

  if (sliderCounter >= dataPatient.length) {
    return setSliderCounter(0);
  }

  return (
    <PageBase>
      <div className="mt-8" />
      <div className="uppercase text-2xl text-center font-bold">
        Patient Profile
      </div>

      <div className="px-6 mt-10">
        <div className="flex flex-col items-center justify-between bg-white w-full h-52 rounded-3xl p-6">
          <button
            className="lex justify-center px-1 bg-minsk text-sm rounded-3xl text-white"
            type="button"
            onClick={() => {
              setSliderCounter(sliderCounter - 1);
            }}
          >
            prev
          </button>

          <div className="border border-minsk rounded-3xl w-full h-2/3">
            <div className="flex justify-center items-center h-full">
              <div>{dataPatient[sliderCounter].address}</div>
            </div>
          </div>

          <button
            className="lex justify-center px-1 bg-minsk text-sm rounded-3xl text-white"
            type="button"
            onClick={() => {
              setSliderCounter(sliderCounter + 1);
            }}
          >
            next
          </button>
        </div>

        {dataPatient[sliderCounter].mintedBy ? (
          <div className="text-center mt-8">
            <div>
              {dataPatient[sliderCounter].soldTo === 0 ? (
                'NFT Belongs to you'
              ) : (
                <div>
                  <div>NFT Belongs to:</div>
                  <div className="mt-3">Your Reward:</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            type="button"
            className={`mt-8 flex justify-center gap-3 p-4 w-full ${
              !dataPatient[sliderCounter].canMint ? 'bg-minsk-grey' : 'bg-minsk'
            } rounded-full text-base text-white font-bold`}
            onClick={() => {
              console.log('не работает');
            }}
            disabled={!dataPatient[sliderCounter].canMint}
          >
            Mint
          </button>
        )}

        <CustomerTabs
          customerData={dataPatient[sliderCounter].offers}
          canMint={dataPatient[sliderCounter].canMint}
          setPrice={(price) => {
            setItemPrice(price);
          }}
        />

        <button
          className={`flex justify-center p-4 w-full ${
            itemPrice === '0.00' ? 'bg-minsk-grey' : 'bg-minsk'
          } bg-minsk rounded-full text-base text-white font-bold`}
          type="button"
          disabled={itemPrice === '0.00'}
          onClick={() => {
            alert(`Кнопка активна сумма ${itemPrice} ETH`);
          }}
        >
          Sell for {itemPrice}
        </button>
      </div>
    </PageBase>
  );
};

export default PatientProfile;
