import React from 'react';
import Header from './pages/Header';
import CryproHeader from './pages/CryptoHeader';
import Tokens from './pages/Tokens';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <div className="home__header">
        <Header/>
        <CryproHeader/>
        <Tokens/>
    </div>
  )
}

export default App;
