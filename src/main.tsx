import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App1 from './App1.tsx';  // Importe o App1

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
);
