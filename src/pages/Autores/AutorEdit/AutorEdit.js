import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { editAutor, getAutorById } from "../../../services/AutorService";

export default function AutorEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [autor, setAutor] = useState('');
    const [nome, setNome] = useState('');

    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAutor = async () => {
            try {
                const data = await getAutorById(id);
                setAutor(data);
                setNome(data.nome)
            } catch (error) {
                console.error("Erro ao buscar autor:", error);
            }
            finally {
                setLoading(false);
                console.log(autor) // Finaliza o estado de loading
            }
        };

        fetchAutor();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const autorEditado = {
          nome,
        };

        console.log(autorEditado);

        try {
          await editAutor(id, autorEditado); // Chama o serviço para editar o livro
          setMensagem('Autor editado com sucesso!');
          // Limpar os campos após a edição
          setNome('');
          // Redirecionar para a página de detalhes ou lista de livros
          navigate(`/autor`);
        } catch (error) {
          console.error('Erro ao editar autor:', error);
          setMensagem('Erro ao editar autores. Tente novamente.');
        }
      };


    if (loading) return <div>Carregando...</div>;
    return(
        <main>
            <div><h1>{mensagem}</h1></div>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Editar Autor: {autor.nome}</h1>
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
                        editar autor
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    )
}