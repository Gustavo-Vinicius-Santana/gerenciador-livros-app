import React, { useState, useEffect } from "react";

import { useLivroData } from "../../../services/hooks/useLivroData";
import { useEditoraData } from "../../../services/hooks/useEditoraData";
import { useAutorData } from "../../../services/hooks/useAutorData";

export default function LivrosCadastro(){
    const { cadastrarLivro, loading, setLoading, mensagem, setMensagem } = useLivroData()
    const { buscarTodosAutores } = useAutorData();
    const { buscarTodasEditoras } = useEditoraData();


    // states dos autores e editoras
    const [autores, setAutores] = useState([]);
    const [editoras, setEditoras] = useState([]);
    // states do cadastro do livro
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autorId, setAutorId] = useState('');
    const [anoLancamento, setAnoLancamento] = useState('');
    const [editoraId, setEditoraId] = useState('');


    const today = new Date().toISOString().split('T')[0];
    const handleDateChange = (event) => {
        const selectedDate = event.target.value; // Ex: "2024-09-01"
        const dateObject = new Date(selectedDate);
        const yearOnly = dateObject.getFullYear(); // Extrai somente o ano
        setAnoLancamento(yearOnly);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const novoLivro = {
          titulo,
          resumo,
          ano_lancamento: anoLancamento,
          autores_id: autorId,
          editoras_id: editoraId,
        };

        console.log(novoLivro);

        await cadastrarLivro(novoLivro, setTitulo, setResumo, setAutorId, setEditoraId, setAnoLancamento);
    };

    useEffect(() => {
        const fetchAutores = async () => {
            await buscarTodosAutores(setAutores);
        };

        const fetchEditoras = async () => {
            await buscarTodasEditoras(setEditoras);
        };

        setLoading(false);
        fetchAutores();
        fetchEditoras();
    }, []);

      if (loading) return <p>Carregando...</p>;
    return(
        <main>
            <div><h1>{mensagem}</h1></div>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Cadastro de Livro</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                        Título
                        </label>
                        <input
                        id="title"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite o título do livro"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
                        Resumo
                        </label>
                        <textarea
                        id="summary"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                        placeholder="Digite o resumo do livro"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        rows="4"
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="lancamento" className="block text-gray-700 font-medium mb-2">
                        ano de lançamento
                        </label>
                        <div className="flex flex-col">
                            <input type="date"
                            onChange={handleDateChange}
                            max={today} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
                        Autor
                        </label>
                        <select
                        id="author"
                        value={autorId}
                        onChange={(e) => setAutorId(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                        >
                        <option value="" disabled>Selecione o autor</option>
                        {autores.map((autor, index) => (
                            <option key={index} value={autor.id}>{autor.nome}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="publisher" className="block text-gray-700 font-medium mb-2">
                        Editora
                        </label>
                        <select
                        id="publisher"
                        value={editoraId}
                        onChange={(e) => setEditoraId(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                        >
                        <option value="" disabled>Selecione a editora</option>
                        {editoras.map((editora, index) => (
                            <option key={index} value={editora.id}>{editora.nome}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                        Cadastrar Livro
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </main>

    )
}