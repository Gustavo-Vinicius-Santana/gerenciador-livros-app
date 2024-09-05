import React, { useState, useEffect } from "react";

import InputText from "../../../components/Forms/Inputs/InputText";
import InputArea from "../../../components/Forms/Inputs/InputArea";
import InputTime from "../../../components/Forms/Inputs/InputTime";
import SelectDados from "../../../components/Forms/selects/SelectDados";
import Botao from "../../../components/Forms/Buttons/Button";

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
                            <Botao titulo="cadastrar livro" />
                        </div>
                    </form>
                </div>
            </div>
        </main>

    )
}