import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as AppRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppRouter>
    <App />
  </AppRouter>,
);
