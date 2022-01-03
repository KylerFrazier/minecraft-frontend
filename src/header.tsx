import React from 'react';
import smallLogo from './logo-small.png';
import {
  Link
} from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
        <img src={smallLogo} alt="logo" />
    </header>
  )
}