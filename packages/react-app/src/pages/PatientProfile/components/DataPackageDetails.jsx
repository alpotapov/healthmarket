import React from 'react';
import PropTypes from 'prop-types';

import ZoraTabs from './ZoraTabs';

const DataPackageDetails = ({ nft }) => {
  const onMint = () => {
    console.log(`minting nft ${nft.address}`);
  };

  return (
    <div>
      {nft.mintedBy ? (
        <div className="text-center mt-8">
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
      ) : (
        <button
          type="button"
          className={`mt-8 flex justify-center gap-3 p-4 w-full ${
            !nft.canMint ? 'bg-minsk-grey' : 'bg-minsk'
          } rounded-full text-base text-white font-bold`}
          onClick={() => onMint()}
          disabled={!nft.canMint}
        >
          Mint
        </button>
      )}

      <ZoraTabs offers={nft.offers} />
    </div>
  );
};

DataPackageDetails.propTypes = {
  nft: PropTypes.shape().isRequired,
};

export default DataPackageDetails;
