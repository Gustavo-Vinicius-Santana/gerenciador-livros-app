import React, { useState } from "react";
import { useUserData } from "../../../services/hooks/useUserData";
import { useAuth } from "../../../contexts/AuthProvider";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";



export default function UsuarioCadastro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const { cadastrarUsuario, mensagem, setMensagem } = useUserData();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submissão do formulário

        const novoUsuario = {
            name,
            email,
            password
        };

        console.log(novoUsuario)

        await cadastrarUsuario(novoUsuario, setName, setEmail, setPassword, login);
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
                        <InputText id="senha" titulo="Senha"
                        placeholder="Digite a sua senha"
                        tipo="text" valor={password} setValor={setPassword}/>
                    </div>

                    <div>
                        <Botao titulo="Cadastrar" />
                    </div>
                </form>
            </div>
        </div>
    )
}