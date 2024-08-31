import React, { useState, useEffect } from "react";
import { getEditoras } from "../../../services/EditoraService";

export default function EditoraShow(){
    const [editoras, setEditoras] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEditoras = async () => {
            try {
                const data = await getEditoras(); // Chama o service para buscar os livros
                setEditoras(data);
                console.log(data) // Atualiza o estado com a lista de livros
            } catch (error) {
                console.error('Erro ao buscar editoras:', error);
            } finally {
                setLoading(false); // Finaliza o estado de loading
            }
        };

      fetchEditoras();
    }, []);

    if (loading) return <p>Carregando...</p>;

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de editoras</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {editoras.map((editora) => (
                        <div key={editora.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{editora.nome}</h2>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
}