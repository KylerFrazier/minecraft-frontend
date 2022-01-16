import React from 'react';
import logo from './logo-large.png';
import Button from 'react-bootstrap/Button';
import './App.css';
import {
  Link
} from "react-router-dom";

// Welcome page for new users or users who haven't signed in
export const Welcome: React.FC = () => {
  return (
    // TODO: change these <div className...> into equivalent bootstrap <Container ...> elements
    <div className="App">
      <div className="App-header">
        <div>Minecraft Servers</div>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  )
}
