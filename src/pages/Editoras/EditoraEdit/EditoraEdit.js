import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getEditoraById } from "../../../services/EditoraService";
import { editEditora } from "../../../services/EditoraService";

export default function EditoraEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [editora, setEditora] = useState('');
    const [nome, setNome] = useState('');

    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchEditora = async () => {
            try {
                const data = await getEditoraById(id);
                setEditora(data);
                setNome(data.nome)
            } catch (error) {
                console.error("Erro ao buscar editora:", error);
            }
            finally {
                setLoading(false);
                console.log(editora) // Finaliza o estado de loading
            }
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

        try {
          await editEditora(id, editoraEditada); // Chama o serviço para editar o livro
          setMensagem('Editora editada com sucesso!');
          // Limpar os campos após a edição
          setNome('');
          // Redirecionar para a página de detalhes ou lista de livros
          navigate(`/editora`);
        } catch (error) {
          console.error('Erro ao editar editora:', error);
          setMensagem('Erro ao editar a editora. Tente novamente.');
        }
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