import React, { useState, useEffect } from "react";

export default function EditoraShow(){

    const fetchEditoras = async () => {
        // Simulação de dados, substitua com chamada à sua API real
        return [
            { id: 1, name: 'Editora 1' },
            { id: 2, name: 'Editora 2' },
            { id: 3, name: 'Editora 3' },
        ];
    };
    const [ editoras, setEditoras] = useState([]);

    useEffect(() => {
      const loadEditoras = async () => {
        const EditorasData = await fetchEditoras();
        setEditoras(EditorasData);
      };

      loadEditoras();
    }, []);

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de editoras</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {editoras.map((editora) => (
                        <div key={editora.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{editora.name}</h2>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
}