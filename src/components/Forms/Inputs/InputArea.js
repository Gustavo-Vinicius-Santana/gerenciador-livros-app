import React from "react";

export default function InputArea({id, titulo, placeholder, linhas, valor, setValor}){

    return(
        <>
            <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
            {titulo}
            </label>
            <textarea
            id={id}
            placeholder={placeholder}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            rows={linhas}
            required
            />
        </>
    )
}