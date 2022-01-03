import React from 'react';
import { Login } from './login'
import { UserPage } from './user'
import { Welcome } from './welcome'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/users" element={<UserPage/>}/>
          <Route path="/" element={<Welcome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
