import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import PropTypes from 'prop-types';

const WelcomeBanner = ({ username }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`${theme} text-white p-4`}>Welcome, {username}</div>;
};

WelcomeBanner.propTypes = {
  username: PropTypes.string.isRequired,
};
export default WelcomeBanner;
