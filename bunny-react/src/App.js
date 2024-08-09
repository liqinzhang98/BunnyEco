import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './customer/pages/home/Home';
import SignUp from './customer/pages/loginregister/SignUp';
import Login from './customer/pages/loginregister/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
