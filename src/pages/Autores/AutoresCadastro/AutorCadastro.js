import React, { useState } from "react";
import { createAutor } from "../../../services/AutorService";

export default function AutorCadastro(){
    const [name, setName] = useState('');
    const [mensagem, setMensagem] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const novoAutor = {
            'nome': name
        };

        console.log(novoAutor);

        try {
          await createAutor(novoAutor); // Chama o serviço para criar o livro
          setMensagem('Autor cadastrado com sucesso!');
          // Limpar os campos após o cadastro
          setName('');
        } catch (error) {
          console.error('Erro ao cadastrar o autor:', error);
          setMensagem('Erro ao cadastrar o autor. Tente novamente.');
        }
    };

    return(
        <main>
            <div><h1>{mensagem}</h1></div>
            <div className="min-h-screen bg-gray-100 p-8">
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