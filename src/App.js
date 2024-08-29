import React from "react"
import Header from './components/Header/Header';
import LivrosBusca from "./pages/LivrosBusca/LivrosBusca";
import LivrosCadastro from "./pages/LivrosCadastro/LivrosCadastro";
import LivrosShow from "./pages/LivrosShow/LivrosShow";

function App() {
  return (
    <>
      <Header />
      <LivrosShow />
    </>
  );
}

export default App;
