import React from 'react';

import Arrow from '../assets/Arrow.svg';

const ChooseGender = () => {
  const [selectedGender, setSelectedGender] = React.useState({
    gender: 'Gender',
  });
  const [openList, setOpenList] = React.useState(false);

  return (
    <div className="mb-8">
      <div
        className={`${
          openList ? 'rounded-3xl' : 'rounded-full h-11'
        } border border-minsk bg-white`}
      >
        <button
          type="button"
          className="flex items-center justify-between w-full px-3.5 py-2.5"
          onClick={() => {
            if (openList) {
              setOpenList(false);
            } else {
              setOpenList(true);
            }
          }}
        >
          <div className="flex items-center gap-5">
            <div className="text-sm">{selectedGender.gender}</div>
          </div>
          <img src={Arrow} alt="Arrow" />
        </button>
        <div className={openList ? 'block' : 'hidden'}>
          <button
            type="button"
            className="flex items-center gap-5 p-3.5"
            onClick={() => {
              setSelectedGender({ gender: 'Male' });
              setOpenList(false);
            }}
          >
            <div className="text-sm">Male</div>
          </button>
          <button
            type="button"
            className="flex items-center gap-5 p-3.5"
            onClick={() => {
              setSelectedGender({ gender: 'Female' });
              setOpenList(false);
            }}
          >
            <div className="text-sm">Female</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseGender;
