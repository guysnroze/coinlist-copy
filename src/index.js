import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/index2.css'
import './styles/index3.css'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

