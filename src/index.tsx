import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { SwapiContextProvider } from './context/SwapiContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SwapiContextProvider>
        <App />
    </SwapiContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

