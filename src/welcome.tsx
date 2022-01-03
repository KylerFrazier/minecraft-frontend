import React from 'react';
import logo from './logo.png';
import './App.css';
import {
  Link
} from "react-router-dom";

// Welcome page for new users or users who haven't signed in
export const Welcome: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <div>Minecraft Servers</div>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    </div>
  )
}
