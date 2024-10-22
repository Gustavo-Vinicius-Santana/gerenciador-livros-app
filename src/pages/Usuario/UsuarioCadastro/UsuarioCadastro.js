import React, { useState } from "react";
import { useUserData } from "../../../services/hooks/useUserData";
import { useAuth } from "../../../contexts/AuthProvider";

import InputText from "../../../components/Forms/Inputs/InputText";
import InputPassword from "../../../components/Forms/Inputs/InputPassword";
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";
import Botao from "../../../components/Forms/Buttons/Button";

export default function UsuarioCadastro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingScreen, setLoadingScreen] = useState(false);

    const { login } = useAuth();
    const { cadastrarUsuario, mensagem, setMensagem } = useUserData();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novoUsuario = {
            name,
            email,
            password
        };

        console.log(novoUsuario)

        setLoadingScreen(true);
        await cadastrarUsuario(novoUsuario, setName, setEmail, setPassword, login);
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <LoadingOverlay loading={loadingScreen} />
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Cadastro</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputText id="nome" titulo="Name"
                        placeholder="Digite o seu nome"
                        tipo="text" valor={name} setValor={setName}/>
                    </div>

                    <div className="mb-4">
                        <InputText id="email" titulo="E-mail"
                        placeholder="Digite o seu email"
                        tipo="text" valor={email} setValor={setEmail}/>
                    </div>

                    <div className="mb-4">
                        <InputPassword password={password} setPassword={setPassword}/>
                    </div>

                    <div>
                        <Botao titulo="Cadastrar" />
                    </div>
                </form>
            </div>
        </div>
    )
}