import React from "react";

export default function Botao({titulo}) {

    return(
        <>
            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
            >
                {titulo}
            </button>
        </>

    )
}