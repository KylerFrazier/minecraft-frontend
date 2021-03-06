import React from 'react';
import smallLogo from './logo-medium.png';
import {
  Link
} from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img src={smallLogo} alt="logo" />
      </Link>
    </header>
  )
}
