import React, { useState, useEffect } from "react";

export default function AutoresShow(){

    const fetchAutores = async () => {
        // Simulação de dados, substitua com chamada à sua API real
        return [
            { id: 1, name: 'autor 1' },
            { id: 2, name: 'autor 2' },
            { id: 3, name: 'autor 3' },
        ];
    };
    const [ autores, setAutores] = useState([]);

    useEffect(() => {
      const loadautores = async () => {
        const autoresData = await fetchAutores();
        setAutores(autoresData);
      };

      loadautores();
    }, []);

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de autores</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {autores.map((autor) => (
                        <div key={autor.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{autor.name}</h2>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
}