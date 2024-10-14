import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { registerUsuario, loginUsuario, logoutUsuario, editUsuario, deleteUsuario, dados } from '../UserService';

export const useUserData = () => {
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cadastro do usuario
    const cadastrarUsuario = async (novoUsuario, setNome, setEmail, setSenha, setToken) => {
        try {
            const access_token = await registerUsuario(novoUsuario);
            setToken(access_token);
            setMensagem('Usuário cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setSenha('');
            navigate('/usuario/tela');
        } catch (error) {
            console.error('Erro ao cadastrar o usuário:', error);
            setMensagem('Erro ao cadastrar o usuário. Tente novamente.');
        }
    };

    // Login de usuário
    const logarUsuario = async (credentials, setToken) => {
        try {
            const token = await loginUsuario(credentials);
            setToken(token);
            setMensagem('Login realizado com sucesso!');
            navigate('/usuario/tela');
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            setMensagem('Erro ao realizar login. Verifique suas credenciais.');
        }
    };

    // Logout de usuário
    const deslogarUsuario = (token) => {
        try {
            logoutUsuario(token);
            setMensagem('Logout realizado com sucesso!');
            navigate('/usuario/login');
        } catch (error) {
            console.error('Erro ao realizar logout:', error);
        }
    };

    // Editar usuário
    const editarUsuario = async ( usuarioEditado, token) => {
        try {
            await editUsuario(usuarioEditado, token);
            navigate('/usuario/tela');
        } catch (error) {
            console.error('Erro ao editar o usuário:', error);
        }
    };

    // Deletar usuário
    const deletarUsuario = async (token) => {
        try {
            await deleteUsuario(token);
            setMensagem('Usuário deletado com sucesso!');
            console.log('usuario deletado')
            navigate('/usuario/login');
        } catch (error) {
            console.error('Erro ao deletar o usuário:', error);
            setMensagem('Erro ao deletar o usuário. Tente novamente.');
        }
    };

    // buscar dados do usuario logado
    const buscarDadosUsuario = async (token, setName, setEmail, setPassword) => {
        try {
            const data = await dados(token);
            setName(data.name);
            setEmail(data.email);
        } catch(error) {
            console.error('Erro ao buscar dados do usuário:', error);
            setMensagem('Erro ao buscar usuario. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return {
        cadastrarUsuario,
        logarUsuario,
        deslogarUsuario,
        editarUsuario,
        deletarUsuario,
        buscarDadosUsuario,

        setLoading,
        setMensagem,

        mensagem,
        loading,
        error
    };
};