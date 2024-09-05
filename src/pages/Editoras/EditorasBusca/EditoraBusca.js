import React, { useState, useEffect } from "react";

import { useEditoraData } from "../../../services/hooks/useEditoraData";

export default function EditoraBusca(){
    const { buscarEditora, loading, setLoading, mensagem, setMensagem } = useEditoraData();

    const [nome, setNome] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        setLoading(false);
    }, []);

    const fetchEditoras = async () => {
        if (nome.trim() === '') {
        setResultados([]);
        setMensagem('');
        setLoading(false);
        return;
        }

        setLoading(true);

        await buscarEditora(nome, setResultados);
    };

    const handleBuscaClick = () => {
        fetchEditoras();
    };


    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Buscar Editora</h1>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Buscar editoras..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>

                    <div className="flex justify-center mb-6">
                        <button
                            onClick={handleBuscaClick}
                            disabled={loading}
                            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            {loading ? 'Buscando...' : 'Buscar'}
                        </button>
                    </div>

                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>
                        {mensagem && <p>{mensagem}</p>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {resultados.map(autor => (
                                <div key={autor.id} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold mb-2">{autor.nome}</h2>
                                    </div>
                                ))}
                        </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}