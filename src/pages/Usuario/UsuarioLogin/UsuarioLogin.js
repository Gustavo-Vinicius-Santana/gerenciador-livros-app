import React, { useState } from "react";
import { useUserData } from "../../../services/hooks/useUserData";
import { useAuth } from "../../../contexts/AuthProvider";

import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";
import InputText from "../../../components/Forms/Inputs/InputText";
import InputPassword from "../../../components/Forms/Inputs/InputPassword";
import Botao from "../../../components/Forms/Buttons/Button";

export default function UsuarioLogin(){
    const [loadingScreen, setLoadingScreen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { logarUsuario, mensagem } = useUserData();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = { email, password };

        console.log(credentials)
        try {
            setLoadingScreen(true);
            await logarUsuario(credentials, login);
        } catch (error) {
            console.error('Erro no login:', error);
        }finally{
            console.log(mensagem)
        }
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <LoadingOverlay loading={loadingScreen} />
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputText id="email" titulo="E-mail"
                        placeholder="Digite o seu email"
                        tipo="text" valor={email} setValor={setEmail}/>
                    </div>

                    <div className="mb-4">
                        <InputPassword password={password} setPassword={setPassword}/>
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