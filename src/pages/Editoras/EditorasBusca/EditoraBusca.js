import React, { useState } from "react";

export default function EditoraBusca(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
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
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}