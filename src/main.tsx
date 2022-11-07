import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as AppRouter} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query';
import App from './App';
import './styles/main.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AppRouter>
      <App />
    </AppRouter>
  </QueryClientProvider>,
);
