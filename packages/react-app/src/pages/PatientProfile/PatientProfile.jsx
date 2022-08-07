import React from 'react';
import PageBase from '../PageBase/PageBase';
import CustomerTabs from './components/CustomerTabs';
import CarouselNFT from './components/CarouselNFT';

const PatientProfile = () => {
  const forTestCustomer = [
    [
      {
        id: 1,
        customer: 'Technical University of Munich',
        price: 0.05,
      },
      {
        id: 2,
        customer: 'BionTech',
        price: 0.04,
      },
    ],
    [
      {
        id: 1,
        customer: 'Technical University of Munich',
        price: 0.01,
      },
      {
        id: 2,
        customer: 'BionTech',
        price: 0.07,
      },
    ],
    [
      {
        id: 1,
        customer: 'Technical University of Munich',
        price: 1.05,
      },
      {
        id: 2,
        customer: 'BionTech',
        price: 1.04,
      },
    ],
    [
      {
        id: 1,
        customer: 'Technical University of Munich',
        price: 0.09,
      },
      {
        id: 2,
        customer: 'BionTech',
        price: 0.07,
      },
    ],
  ];

  const [itemPrice, setItemPrice] = React.useState('0.00');
  const [forTest, setForTest] = React.useState(0);

  return (
    <PageBase>
      <div className="mt-8" />
      <div className="uppercase text-2xl text-center font-bold">
        Patient Profile
      </div>

      <div className="px-6 mt-10">
        <CarouselNFT
          getIndex={(index) => {
            setForTest(index);
          }}
        />

        <button
          type="button"
          className="mt-8 flex justify-center gap-3 p-4 w-full bg-minsk rounded-full text-base text-white font-bold"
          onClick={() => {}}
        >
          Mint
        </button>

        <CustomerTabs
          customerData={forTestCustomer[forTest]}
          setPrice={(price) => {
            setItemPrice(price);
          }}
        />

        <button
          className="flex justify-center gap-3 p-4 w-full bg-minsk rounded-full text-base text-white font-bold"
          type="button"
          disabled={itemPrice === '0.00'}
          onClick={() => {
            alert(`Кнопка активна сумма ${itemPrice} ETH`);
          }}
        >
          Sell for {itemPrice} ETH
        </button>
      </div>
    </PageBase>
  );
};

export default PatientProfile;
