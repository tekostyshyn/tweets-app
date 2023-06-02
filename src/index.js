import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import '@fontsource/montserrat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/tweets-app">
    <App />
  </BrowserRouter>
);
