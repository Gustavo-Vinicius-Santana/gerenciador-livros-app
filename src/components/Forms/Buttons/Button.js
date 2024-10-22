import React from "react";

export default function Botao({ titulo, estilo }) {

  const estiloPadrao = "w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300";

  return (
    <>
      <button
        type="submit"
        // Usa o estilo passado por props ou, se não for passado, usa o estilo padrão
        className={estilo ? estilo : estiloPadrao}
      >
        {titulo}
      </button>
    </>
  );
}