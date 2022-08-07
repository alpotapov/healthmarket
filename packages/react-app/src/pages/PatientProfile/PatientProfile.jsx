import React from 'react';
import PageBase from '../PageBase/PageBase';
import DataPackageCard from './components/DataPackageCard';
import DataPackageDetails from './components/DataPackageDetails';

import nftList from '../../slides.json';

const PatientProfile = () => {
  const [sliderCounter, setSliderCounter] = React.useState(0);

  if (sliderCounter < 0) {
    return setSliderCounter(nftList.length - 1);
  }

  if (sliderCounter >= nftList.length) {
    return setSliderCounter(0);
  }

  console.log({ sliderCounter });

  return (
    <PageBase>
      <div className="mt-8" />
      <div className="uppercase text-2xl text-center font-bold">
        Data Packages
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

          <DataPackageCard nft={nftList[sliderCounter]} index={sliderCounter} />

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

        <DataPackageDetails
          nft={nftList[sliderCounter]}
          key={nftList[sliderCounter].address}
        />
      </div>
    </PageBase>
  );
};

export default PatientProfile;
