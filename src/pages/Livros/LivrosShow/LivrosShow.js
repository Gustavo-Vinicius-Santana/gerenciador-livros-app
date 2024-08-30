import React, { useState, useEffect } from 'react';
import { getLivros } from '../../../services/LivroService';

export default function LivrosShow(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const data = await getLivros(); // Chama o service para buscar os livros
                setBooks(data); // Atualiza o estado com a lista de livros
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            } finally {
                setLoading(false); // Finaliza o estado de loading
            }
        };

      fetchLivros();
    }, []);

    if (loading) return <p>Carregando...</p>;

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de Livros</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{book.titulo}</h2>
                        <p className="text-gray-700 mb-4">{book.resumo}</p>
                        <p className="text-gray-700 mb-4">{book.ano_lancamento}</p>
                        <p className="text-gray-600">Autor: {book.autores_id}</p>
                        <p className="text-gray-600">Editora: {book.editoras_id}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
}