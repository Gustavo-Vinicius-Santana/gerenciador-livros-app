import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getEditoraById } from "../../../services/EditoraService";
import { editEditora } from "../../../services/EditoraService";

import { useEditoraData } from "../../../services/hooks/useEditoraData";

export default function EditoraEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const { buscarEditoraId, editarEditora, mensagem, setMensagem, loading, setLoading } = useEditoraData();

    const [editora, setEditora] = useState('');
    const [nome, setNome] = useState('');


    useEffect(() => {
        const fetchEditora = async () => {
            await buscarEditoraId(id, setEditora, setNome);
        };

        fetchEditora();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const editoraEditada = {
          nome,
        };

        console.log(editoraEditada);

        await editarEditora(id, editoraEditada, setNome)
      };


    if (loading) return <div>Carregando...</div>;
    return(
        <main>
            <div><h1>{mensagem}</h1></div>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Editar Editora: {editora.nome}</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nome
                        </label>
                        <input
                        id="name"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome da editora"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                        />
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                        Cadastrar Editora
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    )
}