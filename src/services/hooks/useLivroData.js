import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { getLivros } from '../LivroService';
import { createLivro } from '../LivroService';
import { searchLivro } from '../LivroService';
import { getLivroById } from '../LivroService';
import { deleteLivro } from '../LivroService';

export const useLivroData = () => {
    const navigate = useNavigate();

    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const buscarTodosLivros = async (setLivros) => {
        try {
            const data = await getLivros();
            setLivros(data);
        } catch (error) {
            setError(error);
            console.error('Erro ao buscar editoras:', error);
        } finally {
            setLoading(false);
        }
    }

    const cadastrarLivro = async (novoLivro, setTitulo, setResumo, setAutorId, setEditoraId, setAnoLancamento) => {
        try {
            await createLivro(novoLivro);
            setMensagem('Livro cadastrado com sucesso!');
            setTitulo('');
            setResumo('');
            setAutorId('');
            setEditoraId('');
            setAnoLancamento('');
          } catch (error) {
            console.error('Erro ao cadastrar o livro:', error);
            setMensagem('Erro ao cadastrar o livro. Tente novamente.');
          }
    };

    const buscarLivro = async (titulo, setResultados) => {
        try {
            const response = await searchLivro(titulo);
            const livros = response.livros || [];
            if (livros.length > 0) {
                setResultados(livros);
                setMensagem('');
            } else {
                setResultados([]);
                setMensagem('Nenhum livro encontrado.');
            }
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
            setResultados([]);
            setMensagem('Erro ao buscar livros. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    const buscarLivroId = async (id, setLivro, setTitulo, setResumo, setAnoLancamento, setAutorId, setEditoraId) => {
        try {
            const data = await getLivroById(id);
            setLivro(data);
            setTitulo(data.titulo);
            setResumo(data.resumo);
            setAnoLancamento(data.ano_lancamento);
            setAutorId(data.autores_id);
            setEditoraId(data.editoras_id);
          } catch (error) {
            console.error("Erro ao buscar o livro:", error);
          }
          finally {
            setLoading(false);
        }
    }

    const deletarLivro = async (selectedBook) => {
        try {
            await deleteLivro(selectedBook.id);
            window.location.reload();
          } catch (error) {
            console.error('Erro ao deletar o livro:', error);
            alert('Erro ao deletar o livro. Tente novamente.');
          }
    }

    return {
        buscarTodosLivros,
        cadastrarLivro,
        buscarLivro,
        buscarLivroId,
        deletarLivro,

        setLoading,
        setMensagem,

        mensagem,
        loading,
        error
    }
}