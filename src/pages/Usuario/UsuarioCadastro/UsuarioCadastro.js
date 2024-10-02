import React, { useState } from "react";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";

export default function UsuarioCadastro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <form>
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