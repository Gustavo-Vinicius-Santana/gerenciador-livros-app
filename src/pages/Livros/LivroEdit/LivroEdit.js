import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editLivro } from "../../../services/LivroService";

import InputText from "../../../components/Forms/Inputs/InputText";
import InputArea from "../../../components/Forms/Inputs/InputArea";
import InputTime from "../../../components/Forms/Inputs/InputTime";
import SelectDados from "../../../components/Forms/selects/SelectDados";
import Botao from "../../../components/Forms/Buttons/Button";
import ToastAviso from "../../../components/Toasts/ToastAviso";
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";

import { useLivroData } from "../../../services/hooks/useLivroData";
import { useAutorData } from "../../../services/hooks/useAutorData";
import { useEditoraData } from "../../../services/hooks/useEditoraData";

export default function LivroEdit(){
    const { buscarLivroId, editarLivro, mensagem, setMensagem, loading, setLoading } = useLivroData();
    const { buscarTodosAutores } = useAutorData();
    const { buscarTodasEditoras } = useEditoraData();

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

    const [showToast, setShowToast] = useState(false);
    const [loadingScreen, setLoadingScreen] = useState(false);

    useEffect(() => {
        const fetchLivro = async () => {
            await buscarLivroId(id, setLivro, setTitulo, setResumo, setAnoLancamento, setAutorId, setEditoraId);
        };
        const fetchAutores = async () => {
            await buscarTodosAutores(setAutores);
        };
        const fetchEditoras = async () => {
            await buscarTodasEditoras(setEditoras);
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

        try{
            setLoadingScreen(true);
            await editarLivro(id, livroEditado, setTitulo, setResumo, setAnoLancamento, setAutorId, setEditoraId);
        }finally{
            setShowToast(true)
            setLoadingScreen(false);
        }
      };

    if (loading) return <div>Carregando...</div>;
    if (!livro || autores.length === 0) return <div>Carregando...</div>;

    return(
        <main>
            <LoadingOverlay loading={loadingScreen} />
            <div className="min-h-screen bg-gray-100 p-8">
                <ToastAviso show={showToast} setShow={setShowToast} mensagem={mensagem} />
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Edição do Livro: {livro.titulo}</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <InputText id="titulo" titulo="titulo"
                            placeholder="Digite o titulo do livro"
                            tipo="text" valor={titulo} setValor={setTitulo}/>
                        </div>

                        <div>
                            <InputArea id="resumo" titulo="Resumo"
                            placeholder="digite o resumo do livro"
                            linhas="4" valor={resumo} setValor={setResumo} />
                        </div>

                        <div>
                            <InputTime id="ano" titulo="ano de lançamento"
                            setValor={setAnoLancamento} />
                        </div>

                        <div>
                            <SelectDados id="autores" titulo="Autor"
                            placeholder="selecione o autor"
                            valor={autorId} setValor={setAutorId} dados={autores} />
                        </div>

                        <div>
                            <SelectDados id="editoras" titulo="Editora"
                            placeholder="selecione a editora"
                            valor={editoraId} setValor={setEditoraId} dados={editoras} />
                        </div>

                        <div>
                            <Botao titulo="editar livro" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )

}