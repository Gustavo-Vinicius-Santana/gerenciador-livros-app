import React, { useState, useEffect } from "react";

import { useUserData } from "../../../services/hooks/useUserData";
import { useAuth } from "../../../contexts/AuthProvider";

import InputText from "../../../components/Forms/Inputs/InputText";
import Botao from "../../../components/Forms/Buttons/Button";

import LoadingLists from "../../../components/Loadings/LoadingLists";
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";

export default function UsuarioEdit(){
    const { buscarDadosUsuario, editarUsuario, loading } = useUserData();
    const { token } = useAuth();

    const [dados, setDados] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingScreen, setLoadingScreen] = useState(false);

    useEffect(() => {
        const fetchDados = async () => {
            if (token) {
                try {
                    await buscarDadosUsuario(token, setName, setEmail);
                    console.log("buscar dados usuario ativado")
                    console.log("Dados do usuário recebidos:", dados);
                } catch (error) {
                    console.log("Erro ao buscar dados do usuário", error);
                }
            }
        };

        fetchDados();
        console.log("dados do usuario no effect:", dados)
    }, [token]);

    const handleEdit = async (event) => {
        event.preventDefault()

        const usuarioEditado = {
            name,
            email,
            password
        };

        console.log("dados para serem enviados para a API:", usuarioEditado)

        try{
            setLoadingScreen(true);
            await editarUsuario(usuarioEditado, token);
            console.log("usuario editado com sucesso");
        }catch(error){
            console.log("erro: ", error);
        } finally{
            setLoadingScreen(false);
        }
    }

    if (loading) return <LoadingLists />

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <LoadingOverlay loading={loadingScreen} />
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Cadastro</h2>

                <form onSubmit={handleEdit}>
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
                        <InputText id="senha" titulo="nova senha"
                        placeholder="Digite a sua nova senha"
                        tipo="text" valor={password} setValor={setPassword}/>
                    </div>

                    <div>
                        <Botao titulo="Editar" />
                    </div>
                </form>
            </div>
        </div>
    )
}