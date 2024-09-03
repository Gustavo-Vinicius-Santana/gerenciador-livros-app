import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editLivro } from "../../../services/LivroService";
import { getLivroById } from "../../../services/LivroService";
import { getEditoras } from "../../../services/EditoraService";
import { getAutores } from "../../../services/AutorService";

export default function LivroEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [livro, setLivro] = useState(null);
    const [autores, setAutores] = useState([]);
    const [editoras, setEditoras] = useState([]);

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autorId, setAutorId] = useState('');
    const [anoLancamento, setAnoLancamento] = useState('');
    const [editoraId, setEditoraId] = useState('');

    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);

    const handleDateChange = (event) => {
        const selectedDate = event.target.value; // Ex: "2024-09-01"
        const dateObject = new Date(selectedDate);
        const yearOnly = dateObject.getFullYear(); // Extrai somente o ano
        setAnoLancamento(yearOnly);
      };

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        const fetchLivro = async () => {
          try {
            const data = await getLivroById(id);
            setLivro(data);
            setTitulo(data.titulo);
            setResumo(data.resumo);
            setAnoLancamento(data.ano_lancamento);
            setAutorId(data.autores_id);
            setEditoraId(data.editoras_id);
          } catch (error) {
            console.error("Erro ao buscar o livro:", error);
          }
          finally {
            setLoading(false);
            console.log(livro) // Finaliza o estado de loading
        }
        };
        const fetchAutores = async () => {
            try {
                const data = await getAutores(); // Chama o service para buscar os livros
                setAutores(data); // Atualiza o estado com a lista de livros
            } catch (error) {
                console.error('Erro ao buscar autores:', error);
            } finally {
                setLoading(false); // Finaliza o estado de loading
            }
        };
        const fetchEditoras = async () => {
            try {
                const data = await getEditoras(); // Chama o service para buscar os livros
                setEditoras(data);
                console.log(data) // Atualiza o estado com a lista de livros
            } catch (error) {
                console.error('Erro ao buscar editoras:', error);
            } finally {
                setLoading(false); // Finaliza o estado de loading
            }
        };

        fetchAutores();
        fetchEditoras();
        fetchLivro();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const livroEditado = {
          titulo,
          resumo,
          ano_lancamento: anoLancamento,
          autores_id: autorId,
          editoras_id: editoraId,
        };

        console.log(livroEditado);

        try {
          await editLivro(id, livroEditado); // Chama o serviço para editar o livro
          setMensagem('Livro editado com sucesso!');
          // Limpar os campos após a edição
          setTitulo('');
          setResumo('');
          setAnoLancamento('');
          setAutorId('');
          setEditoraId('');
          // Redirecionar para a página de detalhes ou lista de livros
          navigate(`/livro`);
        } catch (error) {
          console.error('Erro ao editar o livro:', error);
          setMensagem('Erro ao editar o livro. Tente novamente.');
        }
      };

    if (loading) return <div>Carregando...</div>;
    if (!livro || autores.length === 0) return <div>Carregando...</div>;

    return(
        <main>
            <div><h1>{mensagem}</h1></div>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Edição do Livro: {livro.titulo}</h1>
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