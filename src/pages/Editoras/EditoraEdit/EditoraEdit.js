import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";
import ToastAviso from "../../../components/Toasts/ToastAviso";
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";

import { useEditoraData } from "../../../services/hooks/useEditoraData";

export default function EditoraEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const { buscarEditoraId, editarEditora, mensagem, setMensagem, loading, setLoading } = useEditoraData();

    const [editora, setEditora] = useState('');
    const [nome, setNome] = useState('');

    const [showToast, setShowToast] = useState(false);
    const [loadingScreen, setLoadingScreen] = useState(false);


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

        try{
            setLoadingScreen(true)
            await editarEditora(id, editoraEditada, setNome)
        }finally{
            setLoadingScreen(false)
            setShowToast(true)
        }
      };


    if (loading) return <div>Carregando...</div>;
    return(
        <main>
            <LoadingOverlay loading={loadingScreen} />
            <div className="min-h-screen bg-gray-100 p-8">
                <ToastAviso show={showToast} setShow={setShowToast} mensagem={mensagem} />
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Editar Editora: {editora.nome}</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <InputText id="nome" titulo="Nome"
                            placeholder="Digite o nome da editora"
                            tipo="text" valor={nome} setValor={setNome} />
                        </div>

                        <div>
                            <Botao titulo="cadastrar editora" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}