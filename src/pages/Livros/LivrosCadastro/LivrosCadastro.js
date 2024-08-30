import React, { useState } from "react";
import { createLivro } from "../../../services/LivroService";

export default function LivrosCadastro(){
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autorId, setAutorId] = useState('');
    const [anoLancamento, setAnoLancamento] = useState('');
    const [editoraId, setEditoraId] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Exemplo de dados para os selects
    const authors = [
            {'id': 1, 'nome': 'tolkien'},
            {'id': 2, 'nome':'jk rolling'},
    ];
    const publishers = [
        {'id': 1, 'nome': 'harper collins'},
        {'id': 2, 'nome':'rocco'},
    ];

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

        try {
          await createLivro(novoLivro); // Chama o serviço para criar o livro
          setMensagem('Livro cadastrado com sucesso!');
          // Limpar os campos após o cadastro
          setTitulo('');
          setResumo('');
          setAutorId('');
          setEditoraId('');
        } catch (error) {
          console.error('Erro ao cadastrar o livro:', error);
          setMensagem('Erro ao cadastrar o livro. Tente novamente.');
        }
      };
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
                        <input
                        id="lancamento"
                        type="text"
                        value={anoLancamento}
                        onChange={(e) => setAnoLancamento(e.target.value)}
                        placeholder="Digite o ano de lançamento do livro"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                        />
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
                        {authors.map((author, index) => (
                            <option key={index} value={author.id}>{author.nome}</option>
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
                        {publishers.map((publisher, index) => (
                            <option key={index} value={publisher.id}>{publisher.nome}</option>
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