import React from 'react';
import {
  Link
} from "react-router-dom";
import { Header } from './header'
import Container from 'react-bootstrap/Container';

export const Login: React.FC = () => {
  return (
    <>
      <Header/>
      <Container>Here's the login page</Container>
    </>
  )
}