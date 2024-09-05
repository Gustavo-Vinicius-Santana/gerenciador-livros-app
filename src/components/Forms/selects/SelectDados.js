import React from "react";

export default function SelectDados({id, titulo, placeholder, valor, setValor, dados}) {

    return(
        <>
            <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
                {titulo}
            </label>
            <select
                id={id}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
            >
                <option value="" disabled>{ placeholder }</option>
                {dados.map((dado, index) => (
                    <option key={index} value={dado.id}>{dado.nome}</option>
                ))}
            </select>
        </>
    )
}