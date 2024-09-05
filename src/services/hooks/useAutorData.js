import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { getAutores } from "../AutorService";
import { createAutor } from '../AutorService';
import { searchAutor } from '../AutorService';
import { editAutor } from '../AutorService';
import { getAutorById } from '../AutorService';
import { deleteAutor } from '../AutorService';

export const useAutorData = () => {
    const navigate = useNavigate();

    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const buscarTodosAutores = async (setAutores) => {
        try {
            const data = await getAutores();
            setAutores(data);
        } catch (error) {
            setError(error);
            console.error('Erro ao buscar autores:', error);
        } finally {
            setLoading(false);
        }
    }

    const cadastrarAutor = async (novoAutor) => {
        try {
            await createAutor(novoAutor); // Chama o serviço para criar o autor
            setMensagem('Autor cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar o autor:', error);
            setMensagem('Erro ao cadastrar o autor. Tente novamente.');
        }
    };

    const buscarAutor = async (nome, setResultados) => {
        try {
            setLoading(true);
            const response = await searchAutor(nome);
            const autores = response.autores || [];
            if (autores.length > 0) {
                setResultados(autores);
                setMensagem('');
            } else {
                setResultados([]);
                setMensagem('Nenhum autor encontrado.');
            }
        } catch (error) {
            console.error('Erro ao buscar autores:', error);
            setResultados([]);
            setMensagem('Erro ao buscar autores. Tente novamente.');
        } finally {
            setLoading(false);
         }
    }

    const buscarAutorId = async (id, setAutor, setNome) => {
        try {
            const data = await getAutorById(id);
            setAutor(data);
            setNome(data.nome)
        } catch (error) {
            console.error("Erro ao buscar autor:", error);
        }
        finally {
            setLoading(false);
        }
    }

    const editarAutor = async(id, autorEditado, setNome) => {
        try {
            await editAutor(id, autorEditado); // Chama o serviço para editar o livro
            setMensagem('Autor editado com sucesso!');
            // Limpar os campos após a edição
            setNome('');
            // Redirecionar para a página de detalhes ou lista de livros
            navigate(`/autor`);
          } catch (error) {
            console.error('Erro ao editar autor:', error);
            setMensagem('Erro ao editar autores. Tente novamente.');
          }
    }

    const deletarAutor = async(selectedAutor) => {
        try {
            await deleteAutor(selectedAutor.id);
            window.location.reload();
          } catch (error) {
            console.error('Erro ao deletar a editora:', error);
          }
    }


    return{
        buscarTodosAutores,
        cadastrarAutor,
        buscarAutor,
        editarAutor,
        buscarAutorId,
        deletarAutor,

        setLoading,
        setMensagem,

        mensagem,
        loading,
        error
    }
}