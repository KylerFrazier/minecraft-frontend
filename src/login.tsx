import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import { Header } from './header'
import Container from 'react-bootstrap/Container';

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { BsInfoCircle } from "react-icons/bs";



export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeUsername = (event: any) => {setUsername(event.target.value)}
  const handleChangePassword = (event: any) => {setPassword(event.target.value)}

  const renderUsernameTooltip = (props: any) => (
    <Tooltip {...props}>This is what how we're storing your username and stuff yayeet</Tooltip>
  );
  const renderPasswordTooltip = (props: any) => (
    <Tooltip {...props}>This is what how we're storing your password yayeet pogchamps</Tooltip>
  );

  const handleSubmit = (event: any) => {
    console.log("submitting login info, username: " + username + ", password: " + password)
    event.preventDefault();
    // TODO: call GQL here with username and password
    // if successful, redirect to user page for the logged in user
    // else clear username and password fields and alert users wrong username/password
  }

  return (
    <>
      <Header/>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username
              <OverlayTrigger placement="top" overlay={renderUsernameTooltip}>
                <span style={{marginLeft:"5px"}}>
                  <BsInfoCircle />
                </span>
              </OverlayTrigger>
            </label>
            <input className="form-control" id="username" placeholder="Enter username" value={username} onChange={handleChangeUsername}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password
              <OverlayTrigger placement="top" overlay={renderPasswordTooltip}>
                <span style={{marginLeft:"5px"}}>
                  <BsInfoCircle />
                </span>
              </OverlayTrigger>
            </label>
            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handleChangePassword} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>   
        </form>
      </Container>
    </>
  )
}
