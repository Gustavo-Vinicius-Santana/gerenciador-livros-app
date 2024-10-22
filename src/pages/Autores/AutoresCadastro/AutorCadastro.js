import React, { useState } from "react";

import { useAutorData } from "../../../services/hooks/useAutorData";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";
import ToastAviso from "../../../components/Toasts/ToastAviso";
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";

export default function AutorCadastro(){
    const [name, setName] = useState('');
    const { cadastrarAutor, mensagem, setMensagem } = useAutorData();

    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const novoAutor = {
            'nome': name
        };
        console.log(novoAutor);


        try{
            setLoading(true)
            await cadastrarAutor(novoAutor);
        }finally{
            setName('');
            setLoading(false);
            setShowToast(true);
        }
    };

    return(
        <main>
            <LoadingOverlay loading={loading} />
            <div className="min-h-screen bg-gray-100 p-8">
                <ToastAviso show={showToast} setShow={setShowToast} mensagem={mensagem} />
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">
                        Cadastro de Autor
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <InputText id="name" titulo="Nome"
                                placeholder="Digite o nome do autor"
                                tipo="text" valor={name} setValor={setName}
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