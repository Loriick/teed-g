import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RecoilRoot } from 'recoil';
import App from './App';
import { GlobalStyle } from './App.style';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
