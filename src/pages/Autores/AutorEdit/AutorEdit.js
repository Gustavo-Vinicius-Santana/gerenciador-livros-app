import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";
import LoadingLists from "../../../components/Loadings/LoadingLists";

import { useAutorData } from "../../../services/hooks/useAutorData";

export default function AutorEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const { buscarAutorId, editarAutor, mensagem, setMensagem, loading, setLoading } = useAutorData();

    const [autor, setAutor] = useState('');
    const [nome, setNome] = useState('');
    const [loadingScreen, setLoadingScreen] = useState(false);


    useEffect(() => {
        const fetchAutor = async () => {
            await buscarAutorId(id, setAutor, setNome);
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

        try{
            setLoadingScreen(true)
            await editarAutor(id, autorEditado, setNome);
        }finally{
            setLoadingScreen(false)
        }
    };


    if (loading) return <LoadingLists />
    return(
        <main>
            <LoadingOverlay loading={loadingScreen} />
            <div><h1>{mensagem}</h1></div>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">
                        Editar Autor: {autor.nome}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <InputText id="name" titulo="Nome"
                                placeholder="Digite o nome do autor"
                                tipo="text" valor={nome} setValor={setNome}
                            />
                        </div>

                        <div>
                            <Botao titulo="cadastrar autor" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}