import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../PageBase/PageBase';
import ChooseGender from './components/ChooseGender';
import css from './components/styles.module.css';

import BasicLogo from './assets/BasicLogo.png';
import Healthwallet from './assets/Healthwallet.svg';
import Marketplace from './assets/Marketplace.svg';

const BasicProfile = () => {
  const [dataHealthWallet, setDataHealthWallet] = React.useState('');

  return (
    <PageBase>
      <div className="bg-gray">
        <div className="pb-20" />
        <div className="flex justify-between items-center mt-5">
          <img
            src={BasicLogo}
            alt="BasicLogo"
            className="w-40 h-40 relative -mb-16"
          />
          <div className="w-40">
            <div className="max-w-xs text-3xl font-bold">
              <span className="text-raspberry"> Base </span>
              Profile
            </div>
          </div>
        </div>

        <div className="px-6 pt-8 rounded-t-3xl bg-dark-gray">
          <form
            className={`${css.form_border} px-5 pt-11 pb-5 bg-white rounded-3xl`}
          >
            <input
              className="px-6 w-full border border-dark-gray rounded-2xl h-14 text-sm mb-6"
              placeholder="Age"
            />

            <ChooseGender />

            <input
              className="px-6 w-full border border-dark-gray rounded-2xl h-14 text-sm mb-6"
              placeholder="Ethnicity"
            />
          </form>

          <div className="mt-12">
            <button
              type="button"
              onClick={() => setDataHealthWallet('12 Health Records imported')}
              className="flex items-center w-full rounded-2xl bg-raspberry h-14 px-3.5"
            >
              <img src={Healthwallet} alt="Healthwallet" />
              <div className="text-white font-bold text-sm mx-auto">
                Connect to HealthWallet
              </div>
            </button>

            <div className="mt-5 text-sm text-raspberry text-center">
              {dataHealthWallet}
            </div>
          </div>

          <div className="mt-16 mb-14">
            <div className="flex items-center w-full bg-blue rounded-2xl">
              <Link
                className="w-full flex items-center text-sm text-white font-bold px-3.5 h-14"
                to="/patient-page"
              >
                <img src={Marketplace} alt="Marketplace" />
                <div className="mx-auto">Go To Marketplace</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default BasicProfile;
