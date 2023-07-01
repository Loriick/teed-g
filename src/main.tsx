import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GlobalStyle } from './App.style.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
