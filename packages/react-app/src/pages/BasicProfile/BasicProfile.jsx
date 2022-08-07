import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import ChooseGender from './components/ChooseGender';

const BasicProfile = () => {
  const [dataHealthWallet, setDataHealthWallet] = React.useState('');

  return (
    <PageBase>
      <div className="mt-8" />
      <div className="uppercase text-2xl text-center font-bold">
        Base Profile
      </div>

      <form className="px-6 mt-10">
        <input
          className="px-6 w-full border border-minsk rounded-full h-11 text-sm mb-8"
          placeholder="Age"
        />

        <ChooseGender />

        <input
          className="px-6 w-full border border-minsk rounded-full h-11 text-sm"
          placeholder="Ethnicity"
        />
      </form>

      <div className="px-6 mt-10">
        <button
          type="button"
          onClick={() => setDataHealthWallet('12 Health Records imported')}
          className="w-full border border-minsk rounded-full h-11 text-sm text-minsk"
        >
          Connect to HealthWallet
        </button>

        <div className="mt-8 text-center">{dataHealthWallet}</div>
      </div>

      <div className="px-6 mt-20 mb-6">
        <div className="flex justify-center gap-3 p-4 w-full bg-minsk rounded-full">
          <Link className="text-base text-white font-bold" to="/patient-page">
            Go To Marketplace
          </Link>
        </div>
      </div>
    </PageBase>
  );
};

export default BasicProfile;
