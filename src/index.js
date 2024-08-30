import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header/Header';
import Inicial from './pages/Inicial/Inicial';
import LivrosBusca from "./pages/LivrosBusca/LivrosBusca";
import LivrosCadastro from "./pages/LivrosCadastro/LivrosCadastro";
import LivrosShow from "./pages/LivrosShow/LivrosShow";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial />,
  },
  {
    path: "/livro",
    element: <LivrosShow />,
  },
  {
    path: "/livro/busca",
    element: <LivrosBusca />,
  },
  {
    path: "/livro/cadastro",
    element: <LivrosCadastro />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
  </React.StrictMode>
);
