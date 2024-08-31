import React, { useState, useEffect } from "react";
import { getAutores } from '../../../services/AutorService';

export default function AutoresShow(){
    const [autores, setAutores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAutores = async () => {
            try {
                const data = await getAutores(); // Chama o service para buscar os livros
                setAutores(data); // Atualiza o estado com a lista de livros
            } catch (error) {
                console.error('Erro ao buscar autores:', error);
            } finally {
                setLoading(false); // Finaliza o estado de loading
            }
        };

      fetchAutores();
    }, []);

    if (loading) return <p>Carregando...</p>;

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de autores</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {autores.map((autor) => (
                        <div key={autor.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{autor.nome }</h2>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
}