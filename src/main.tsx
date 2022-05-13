import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/app.scss';
import App from './App';
import 'uno.css';
import 'uno:utilities.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
