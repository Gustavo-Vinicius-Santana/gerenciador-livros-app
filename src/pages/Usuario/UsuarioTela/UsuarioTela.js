import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from "../../../services/hooks/useUserData";

import LoadingLists from '../../../components/Loadings/LoadingLists';
import Botao from '../../../components/Forms/Buttons/Button';

import { useAuth } from '../../../contexts/AuthProvider';

export default function UsuarioTela(){
    const { deslogarUsuario, deletarUsuario, buscarDadosUsuario, mensagem, loading } = useUserData();
    const { token } = useAuth();

    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');

    console.log(token)

    useEffect(() => {
        const fetchDados = async () => {
            if (token) {
                try {
                    await buscarDadosUsuario(token, setName, setEmail);
                } catch (error) {
                    console.log("Erro ao buscar dados do usuário", error);
                }
            }
        };

        fetchDados();
    }, [token]);

    const handleLogout = () => {
        try {
            deslogarUsuario(token);
        } catch (error) {
            console.error('Erro ao deslogar', error);
        }finally{
            console.log(mensagem)
        }
    };

    const handleDelete = () => {
        deletarUsuario(token);
    }

    if (loading) return <LoadingLists />

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Bem-vindo, {name}!
                </h1>

                <p className="text-gray-600 mb-6">E-mail: <span className="font-medium">{email}</span></p>

                <a onClick={handleLogout}>
                    <Botao titulo="Logout" />
                </a>

                <div className="flex space-x-4 mt-4 w-full">
                    <a href={`/usuario/editar`} className='w-1/2'>
                        <Botao
                            titulo="Editar"
                            estilo="w-full py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition duration-300"
                        />
                    </a>

                    <a onClick={handleDelete} className='w-1/2'>
                        <Botao
                            titulo="Deletar"
                            estilo="w-full py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300"
                        />
                    </a>
                </div>

            </div>
        </div>
    )
}