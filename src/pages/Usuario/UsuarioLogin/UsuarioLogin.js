import React, { useState } from "react";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";

export default function UsuarioLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Cadastro</h2>

                <form>
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

                    <div className="mb-4 flex items-center justify-end space-x-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="form-checkbox h-4 w-4 text-gray-600 focus:outline-none focus:ring-0"
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <div>
                        <Botao titulo="Login" />
                    </div>
                </form>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <a href={`/usuario/cadastro`} className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>

                <p className="text-sm text-center text-gray-600 mt-4">
                    <a href="#" className="ml-auto text-sm text-blue-600 hover:underline">
                        Forgot Password?
                    </a>
                </p>
            </div>
        </div>
    )
}