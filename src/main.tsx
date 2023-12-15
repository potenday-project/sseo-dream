import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import setLocalStorageTheme from './utils/theme';

setLocalStorageTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
