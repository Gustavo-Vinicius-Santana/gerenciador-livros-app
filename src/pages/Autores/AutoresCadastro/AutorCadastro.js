import React, { useState } from "react";

import { useAutorData } from "../../../services/hooks/useAutorData";
import ToastAviso from "../../../components/Toasts/ToastAviso";

export default function AutorCadastro(){
    const [name, setName] = useState('');
    const { cadastrarAutor, mensagem, setMensagem } = useAutorData();

    const [showToast, setShowToast] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const novoAutor = {
            'nome': name
        };
        console.log(novoAutor);


        await cadastrarAutor(novoAutor);
        setName('');
        setShowToast(true)
    };

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <ToastAviso show={showToast} setShow={setShowToast} mensagem={mensagem} />
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Cadastro de Autor</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nome
                        </label>
                        <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite o nome do autor"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                        />
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                        Cadastrar Autor
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </main>

    )
}