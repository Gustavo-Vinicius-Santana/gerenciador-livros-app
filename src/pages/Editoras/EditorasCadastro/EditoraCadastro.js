import React, { useState } from "react";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";

import ToastAviso from "../../../components/Toasts/ToastAviso";
import { useEditoraData } from "../../../services/hooks/useEditoraData";

export default function EditoraCadastro(){
    const { cadastrarEditora, mensagem, setMensagem } = useEditoraData();
    const [name, setName] = useState('');

    const [showToast, setShowToast] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const novaEditora = {
            'nome': name
        };

        console.log(novaEditora);

        await cadastrarEditora(novaEditora);
        setShowToast(true)
    };

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <ToastAviso show={showToast} setShow={setShowToast} mensagem={mensagem} />
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Cadastro de Editora</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <InputText id="nome" titulo="Nome:"
                            placeholder="Digite o nome da editora"
                            tipo="text" valor={name} setValor={setName} />
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