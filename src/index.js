import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header/Header';
import Inicial from './pages/Inicial/Inicial';

// paginas dos livros
import LivrosBusca from "./pages/Livros/LivrosBusca/LivrosBusca";
import LivrosCadastro from "./pages/Livros/LivrosCadastro/LivrosCadastro";
import LivrosShow from "./pages/Livros/LivrosShow/LivrosShow";
import LivroEdit from './pages/Livros/LivroEdit/LivroEdit';

// paginas editoras
import EditoraBusca from './pages/Editoras/EditorasBusca/EditoraBusca';
import EditoraCadastro from './pages/Editoras/EditorasCadastro/EditoraCadastro';
import EditoraShow from './pages/Editoras/EditorasShow/EditoraShow';
import EditoraEdit from './pages/Editoras/EditoraEdit/EditoraEdit';

// paginas autores
import AutorBusca from './pages/Autores/AutoresBusca/AutorBusca';
import AutorCadastro from './pages/Autores/AutoresCadastro/AutorCadastro';
import AutoresShow from './pages/Autores/AutoresShow/AutoresShow';
import AutorEdit from './pages/Autores/AutorEdit/AutorEdit';

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
    path: "/livro/editar/:id",
    element: <LivroEdit />,
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
  {
    path: "/editora/editar/:id",
    element: <EditoraEdit />,
  },

  {
    path: "/autor",
    element: <AutoresShow />,
  },
  {
    path: "/autor/busca",
    element: <AutorBusca />,
  },
  {
    path: "/autor/cadastro",
    element: <AutorCadastro />,
  },
  {
    path: "/autor/editar/:id",
    element: <AutorEdit />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
  </React.StrictMode>
);
