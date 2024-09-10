import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import ModalEdit from "../../../components/Modals/ModalEdit";
import { useLivroData } from '../../../services/hooks/useLivroData';

export default function LivrosShow(){
    const navigate = useNavigate();
    const { buscarTodosLivros, deletarLivro, loading } = useLivroData();
    const [books, setBooks] = useState([]);


    const [selectedItem, setSelectedItem] = useState(null);
    const [statusModal, setStatusModal] = useState(false);


    const openModalCard = (item) => {
        setStatusModal(true);
        setSelectedItem(item);
    }
    const directEdit = () => {
        navigate(`/livro/editar/${selectedItem.id}`);
    }



    useEffect(() => {
        const fetchLivros = async () => {
            await buscarTodosLivros(setBooks);
        };

      fetchLivros();
    }, []);
    const handleDelete = async () => {
        await deletarLivro(setSelectedItem);
      };


    if (loading) return <p>Carregando...</p>;

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de Livros</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <div onClick={() => openModalCard(book)} key={book.id} className="cursor-pointer bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">{book.titulo}</h2>
                            <p className="text-gray-700 mb-4">{book.resumo}</p>
                            <p className="text-gray-700 mb-4">{book.ano_lancamento}</p>
                            <p className="text-gray-600">Autor: {book.autores_id}</p>
                            <p className="text-gray-600">Editora: {book.editoras_id}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <ModalEdit
                item={selectedItem} setItem={setSelectedItem}
                status={statusModal} setStatus={setStatusModal}
                name={selectedItem?.nome}
                resumo={selectedItem?.resumo}
                ano_lancamento={selectedItem?.ano_lancamento}
                editora_id={selectedItem?.editoras_id}
                autor_id={selectedItem?.autores_id}
                onDelete={handleDelete} onEdit={directEdit}
            />

        </main>
    )
}