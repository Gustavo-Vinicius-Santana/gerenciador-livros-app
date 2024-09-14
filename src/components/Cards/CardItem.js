import React from "react";

export default function CardItem({item, openModal}){

    return(
        <>
            <div onClick={() => openModal(item)} key={item.id} className=" cursor-pointer bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">{item.nome || item.titulo}</h2>
                {item.resumo && <p className="text-gray-700 mb-4">{item.resumo}</p>}
                {item.ano_lancamento && <p className="text-gray-700 mb-4">{item.ano_lancamento}</p>}
                {item.autores_id && <p className="text-gray-600">autor: {item.autores_id}</p>}
                {item.editoras_id && <p className="text-gray-600">editora: {item.editoras_id}</p>}
            </div>
        </>
    )
}