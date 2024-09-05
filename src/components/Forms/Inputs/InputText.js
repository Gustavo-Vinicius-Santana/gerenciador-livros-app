import React from "react";

export default function InputText({id, titulo, placeholder, tipo, valor, setValor}){

    return(
        <>
            <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
            {titulo}
            </label>
            <input
            id={id}
            type={tipo}
            placeholder={placeholder}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
            />
        </>
    )
}