import React from 'react';
import PropTypes from 'prop-types';

import ConnectPage from '../ConnectPage/ConnectPage';

import { useDisconnectReason } from '../../components/ConnectionError';
import useToggle from '../../hooks/useToggle';

const PageBase = ({ children }) => {
  const disconnectReason = useDisconnectReason();

  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  if (disconnectReason) {
    return <ConnectPage disconnectReason={disconnectReason} />;
  }

  return (
    <div className="bg-gray">
      <div className="flex min-h-screen flex-col max-w-md mx-auto">
        <div className="bg-pattern bg-no-repeat bg-top">
          <div className="container mx-auto" />
        </div>

        <div className="flex-grow flex flex-col min-h-full">{children}</div>
      </div>
    </div>
  );
};

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBase;
