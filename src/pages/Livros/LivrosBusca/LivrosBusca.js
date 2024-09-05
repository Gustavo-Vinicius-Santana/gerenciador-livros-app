import React, { useState, useEffect }  from "react";

import { useLivroData } from "../../../services/hooks/useLivroData";

export default function LivrosBusca(){
    const { buscarLivro, mensagem, setMensagem, loading, setLoading } = useLivroData();

    const [titulo, setTitulo] = useState('');
    const [resultados, setResultados] = useState([]);

    // Função para buscar livros
    const fetchLivros = async () => {
        if (titulo.trim() === '') {
        setResultados([]);
        setMensagem('');
        setLoading(false);
        return;
        }

        setLoading(true);

        await buscarLivro(titulo, setResultados);
    };

    // Função chamada quando o botão de busca é clicado
    const handleBuscaClick = () => {
        fetchLivros();
    };

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Buscar Livros</h1>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Buscar livros..."
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
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
                            {resultados.map(livro => (
                                <div key={livro.id} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold mb-2">{livro.titulo}</h2>
                                        <p className="text-gray-700 mb-4">{livro.resumo}</p>
                                        <p className="text-gray-700 mb-4">{livro.ano_lancamento}</p>
                                        <p className="text-gray-600">Autor: {livro.autores_id}</p>
                                        <p className="text-gray-600">Editora: {livro.editoras_id}</p>
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