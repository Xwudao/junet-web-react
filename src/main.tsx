import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/app.scss';
import App from './App';
import 'minireset.css/minireset.css';
import 'uno.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
);
