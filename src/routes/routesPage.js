import React from "react";

import {
    createBrowserRouter,
  } from "react-router-dom";

import Inicial from '../pages/Inicial/Inicial';

// paginas dos livros
import LivrosBusca from "../pages/Livros/LivrosBusca/LivrosBusca";
import LivrosCadastro from "../pages/Livros/LivrosCadastro/LivrosCadastro";
import LivrosShow from "../pages/Livros/LivrosShow/LivrosShow";
import LivroEdit from '../pages/Livros/LivroEdit/LivroEdit';

// paginas editoras
import EditoraBusca from '../pages/Editoras/EditorasBusca/EditoraBusca';
import EditoraCadastro from '../pages/Editoras/EditorasCadastro/EditoraCadastro';
import EditoraShow from '../pages/Editoras/EditorasShow/EditoraShow';
import EditoraEdit from '../pages/Editoras/EditoraEdit/EditoraEdit';

// paginas autores
import AutorBusca from '../pages/Autores/AutoresBusca/AutorBusca';
import AutorCadastro from '../pages/Autores/AutoresCadastro/AutorCadastro';
import AutoresShow from '../pages/Autores/AutoresShow/AutoresShow';
import AutorEdit from '../pages/Autores/AutorEdit/AutorEdit';

// paginas usuarios
import UsuarioLogin from '../pages/Usuario/UsuarioLogin/UsuarioLogin';
import UsuarioCadastro from '../pages/Usuario/UsuarioCadastro/UsuarioCadastro';
import UsuarioTela from '../pages/Usuario/UsuarioTela/UsuarioTela';
import UsuarioEdit from '../pages/Usuario/UsuarioEdit/UsuarioEdit';

const routerPages = createBrowserRouter([
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

    {
      path: "/usuario/login",
      element: <UsuarioLogin />
    },
    {
      path: "/usuario/cadastro",
      element: <UsuarioCadastro />
    },
    {
      path: "/usuario/tela",
      element: <UsuarioTela />
    },
    {
      path: "/usuario/editar",
      element: <UsuarioEdit />
    },
]);

export default routerPages;