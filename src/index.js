import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header/Header';
import Inicial from './pages/Inicial/Inicial';

// paginas dos livros
import LivrosBusca from "./pages/Livros/LivrosBusca/LivrosBusca";
import LivrosCadastro from "./pages/Livros/LivrosCadastro/LivrosCadastro";
import LivrosShow from "./pages/Livros/LivrosShow/LivrosShow";

// paginas editoras
import EditoraBusca from './pages/Editoras/EditorasBusca/EditoraBusca';
import EditoraCadastro from './pages/Editoras/EditorasCadastro/EditoraCadastro';
import EditoraShow from './pages/Editoras/EditorasShow/EditoraShow';

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
  {
    path: "/editora",
    element: <EditoraShow />,
  },
  {
    path: "/editora/busca",
    element: <EditoraBusca />,
  },
  {
    path: "/editora/cadastro",
    element: <EditoraCadastro />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
  </React.StrictMode>
);
