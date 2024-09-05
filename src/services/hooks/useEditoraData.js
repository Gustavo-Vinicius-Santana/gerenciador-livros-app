import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { getEditoras } from '../EditoraService';
import { createEditora } from '../EditoraService';
import { searchEditora } from '../EditoraService';
import { getEditoraById } from '../EditoraService';
import { editEditora } from '../EditoraService';
import { deleteEditora } from '../EditoraService';

export const useEditoraData = () => {
    const navigate = useNavigate();

    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const buscarTodasEditoras = async (setEditoras) => {
        try {
            const data = await getEditoras();
            setEditoras(data);
        } catch (error) {
            setError(error);
            console.error('Erro ao buscar editoras:', error);
        } finally {
            setLoading(false);
        }
    }

    const cadastrarEditora = async (novaEditora) => {
        try {
            await createEditora(novaEditora); // Chama o serviço para criar o autor
            setMensagem('Autor cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar o autor:', error);
            setMensagem('Erro ao cadastrar o autor. Tente novamente.');
        }
    };

    const buscarEditora = async (nome, setResultados) => {
        try {
            setLoading(true);
            const response = await searchEditora(nome);
            const editoras = response.editoras || [];
            if (editoras.length > 0) {
                setResultados(editoras);
                setMensagem('');
            } else {
                setResultados([]);
                setMensagem('Nenhum autor encontrado.');
            }
        } catch (error) {
            console.error('Erro ao buscar editoras:', error);
            setResultados([]);
            setMensagem('Erro ao buscar editoras. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    const buscarEditoraId = async (id, setEditora, setNome) => {
        try {
            const data = await getEditoraById(id);
            setEditora(data);
            setNome(data.nome)
        } catch (error) {
            console.error("Erro ao buscar autor:", error);
        }
        finally {
            setLoading(false);
        }
    }

    const editarEditora = async (id, editoraEditada, setNome) => {
        try {
            await editEditora(id, editoraEditada); // Chama o serviço para editar o livro
            setMensagem('Autor editado com sucesso!');
            // Limpar os campos após a edição
            setNome('');
            // Redirecionar para a página de detalhes ou lista de livros
            navigate(`/editora`);
          } catch (error) {
            console.error('Erro ao editar autor:', error);
            setMensagem('Erro ao editar autores. Tente novamente.');
          }
    }

    const deletarEditora = async(selectedEditora) => {
        try {
            await deleteEditora(selectedEditora.id);
            window.location.reload();
          } catch (error) {
            console.error('Erro ao deletar a editora:', error);
          }
    }

    return{
        buscarTodasEditoras,
        cadastrarEditora,
        buscarEditora,
        buscarEditoraId,
        editarEditora,
        deletarEditora,

        setLoading,
        setMensagem,

        mensagem,
        loading,
        error
    }
}