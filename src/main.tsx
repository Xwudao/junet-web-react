import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/app.scss';
import App from './App';

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
