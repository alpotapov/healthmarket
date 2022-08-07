import React from 'react';
import PageBase from '../PageBase/PageBase';
import DataPackageDetails from './components/DataPackageDetails';
import DataPackageCard from './components/DataPackageCard';
import css from './components/styles.module.css';

import nftList from '../../slides.json';
import PatientLogo from './assets/PatientLogo.png';
import ArrowTop from './assets/ArrowTop.svg';
import ArrowDown from './assets/ArrowDown.svg';

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
      <div className="bg-gray">
        <div className="pb-20" />
        <div className="flex justify-between items-center px-6">
          <img
            src={PatientLogo}
            alt="PatientLogo"
            className="w-40 h-40 relative -mb-8 z-20"
          />
          <div className="w-40">
            <div className="max-w-xs text-4xl font-bold">
              <span className="text-minsk"> Patient </span>
              Profiles
            </div>
          </div>
        </div>

        <div className="bg-dark-gray rounded-t-3xl">
          <div className="px-8 py-5 flex flex-col items-center justify-between w-full h-64">
            <button
              className={`${css.arrows_shadow} w-6 h-6 flex justify-center items-center pb-0.5 bg-white rounded-3xl`}
              type="button"
              onClick={() => {
                setSliderCounter(sliderCounter - 1);
              }}
            >
              <img src={ArrowTop} alt="ArrowTop" />
            </button>

            <DataPackageCard
              nft={nftList[sliderCounter]}
              index={sliderCounter}
            />

            <button
              className={`${css.arrows_shadow} w-6 h-6 flex justify-center items-center pt-0.5 bg-white rounded-3xl`}
              type="button"
              onClick={() => {
                setSliderCounter(sliderCounter + 1);
              }}
            >
              <img src={ArrowDown} alt="ArrowDown" />
            </button>
          </div>

          <DataPackageDetails
            nft={nftList[sliderCounter]}
            key={nftList[sliderCounter].address}
          />
        </div>
      </div>
    </PageBase>
  );
};

export default PatientProfile;
