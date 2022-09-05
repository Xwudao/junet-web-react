import React from 'react';
import ReactDOM from 'react-dom';

import '@/assets/styles/app.scss';
import App from './App';
import 'minireset.css/minireset.css';
import 'uno.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
