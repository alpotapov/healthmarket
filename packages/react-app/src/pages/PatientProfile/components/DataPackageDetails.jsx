import React from 'react';
import PropTypes from 'prop-types';

import ZoraTabs from './ZoraTabs';

import Point from '../assets/Point.svg';

const DataPackageDetails = ({ nft }) => {
  const onMint = () => {
    console.log(`minting nft ${nft.address}`);
  };

  return (
    <div>
      {nft.mintedBy ? (
        <div className="px-6">
          <div className="text-center mt-3 mb-10">
            <div>
              {nft.soldTo === 0 ? (
                'NFT Belongs to you'
              ) : (
                <div>
                  <div>NFT Belongs to:</div>
                  <div className="mt-3">Your Reward:</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6">
          <button
            type="button"
            className={`mt-3 flex justify-center gap-3 p-4 w-full ${
              !nft.canMint ? 'bg-minsk-grey mb-3' : 'bg-minsk mb-10'
            } rounded-2xl text-sm text-white font-bold`}
            onClick={() => onMint()}
            disabled={!nft.canMint}
          >
            Mint
          </button>
          {!nft.canMint ? (
            <div className="flex justify-center items-center text-xs pb-2.5">
              <img src={Point} alt="Point" />
              <div className="pl-2 text-concrete">
                You do not have COVID test
              </div>
            </div>
          ) : null}
        </div>
      )}

      <div className="pt-8 px-6 bg-white rounded-t-3xl">
        <ZoraTabs offers={nft.offers} />
      </div>
    </div>
  );
};

DataPackageDetails.propTypes = {
  nft: PropTypes.shape().isRequired,
};

export default DataPackageDetails;
