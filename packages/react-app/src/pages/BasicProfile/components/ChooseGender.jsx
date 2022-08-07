import React from 'react';

import Arrow from '../assets/Arrow.svg';
import Male from '../assets/Male.svg';
import Female from '../assets/Female.svg';

const ChooseGender = () => {
  const [selectedGender, setSelectedGender] = React.useState({
    logo: '',
    gender: 'Gender',
  });
  const [openList, setOpenList] = React.useState(false);

  return (
    <div className="mb-6">
      <div
        className={`${
          openList ? '' : 'h-14'
        } rounded-2xl border border-dark-gray bg-white`}
      >
        <button
          type="button"
          className="flex items-center justify-between w-full px-5 py-4"
          onClick={() => {
            if (openList) {
              setOpenList(false);
            } else {
              setOpenList(true);
            }
          }}
        >
          <div className="flex items-center gap-5">
            {selectedGender.logo === '' ? (
              ''
            ) : (
              <img src={selectedGender.logo} alt="img" />
            )}
            <div className="text-sm text-mercury-900">
              {selectedGender.gender}
            </div>
          </div>
          <img src={Arrow} alt="Arrow" />
        </button>
        <div className={openList ? 'block' : 'hidden'}>
          <button
            type="button"
            className="flex items-center gap-5 p-5"
            onClick={() => {
              setSelectedGender({ logo: Male, gender: 'Male' });
              setOpenList(false);
            }}
          >
            <img src={Male} alt="Male" />
            <div className="text-sm text-blue">Male</div>
          </button>
          <button
            type="button"
            className="flex items-center gap-5 p-5"
            onClick={() => {
              setSelectedGender({ logo: Female, gender: 'Female' });
              setOpenList(false);
            }}
          >
            <img src={Female} alt="Female" />
            <div className="text-sm text-raspberry">Female</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseGender;
