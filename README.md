# Gerenciador de Livros

Um sistema de gerenciamento de livros desenvolvido em **React**. Este aplicativo permite que os usuários cadastrem, editem, removam e visualizem livros, além de gerenciar autores e editoras. Comunicando-se com API laravel [gerenciador-livros-api](https://github.com/seu-usuario/gerenciador-livros-api)

## Funcionalidades

- **Cadastro de livros**: Adicione novos livros com título, resumo, autor, ano de lançamento e editora.
- **Edição de livros**: Edite as informações dos livros existentes.
- **Remoção de livros**: Exclua livros do sistema.
- **Listagem de livros**: Veja a lista completa de livros cadastrados.
- **Visualização detalhada**: Exiba os detalhes completos de cada livro.
- **Gerenciamento de autores e editoras**: Selecione e gerencie autores e editoras associados aos livros.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário.
- [React Router](https://reactrouter.com/) - Para navegação entre páginas.
- [Axios](https://axios-http.com/) - Para fazer requisições HTTP para a API.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitário para estilização.
- [Flowbite](https://flowbite.com/) - Componentes de UI para Tailwind CSS.

## Requisitos

- Node.js 16.x ou superior
- NPM ou Yarn

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

### 1. Clonar o repositório

```bash
git clone https://github.com/Gustavo-Vinicius-Santana/gerenciador-livros-app

cd gerenciador-livros-app
```

## Executando o Projeto

### 1. inicie o projeto

```bash
npm start
```

### 2. inicie a API do repositorio: [gerenciador-livros-api](https://github.com/seu-usuario/gerenciador-livros-api)

### 3. configure a rota da API no axios
```bash
src/services/api.js
```

Abra http://localhost:3000 no navegador para visualizar o sistema.