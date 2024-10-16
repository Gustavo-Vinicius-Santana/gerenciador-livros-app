import React from 'react';
import './index.css';

import ReactDOM from 'react-dom/client';

import {
  RouterProvider,
} from "react-router-dom";

import routerPages from './routes/routesPage';

import Header from './components/Header/Header';
import { AuthProvider } from './contexts/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Header />
      <RouterProvider router={routerPages} />
    </AuthProvider>
  </React.StrictMode>
);
