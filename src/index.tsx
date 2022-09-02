import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Index from 'pages/Index';
import Menu from 'pages/Menu';

const currentPage = window.location.pathname === '/' ? <Index /> : <Menu />;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {currentPage}
  </React.StrictMode>
);

