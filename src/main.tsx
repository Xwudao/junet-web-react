import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/app.scss';
import App from './App';

import 'uno.css'
// import '@unocss/reset/normalize.css'
// import '@unocss/reset/tailwind.css'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
