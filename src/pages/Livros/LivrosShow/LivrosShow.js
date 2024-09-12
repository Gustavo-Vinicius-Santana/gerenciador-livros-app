import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import ModalEdit from "../../../components/Modals/ModalEdit";
import CardItem from '../../../components/Cards/CardItem';
import LoadingLists from '../../../components/Loadings/LoadingLists';
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";

import { useLivroData } from '../../../services/hooks/useLivroData';

export default function LivrosShow(){
    const navigate = useNavigate();
    const { buscarTodosLivros, deletarLivro, loading } = useLivroData();
    const [books, setBooks] = useState([]);


    const [selectedItem, setSelectedItem] = useState(null);
    const [statusModal, setStatusModal] = useState(false);
    const [loadingScreen, setLoadingScreen] = useState(false);


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
        try{
            setLoadingScreen(true)
            setStatusModal(false)
            await deletarLivro(selectedItem);
        }finally{
            setLoadingScreen(false)
            setSelectedItem(null)
        }
      };


    if (loading) return <LoadingLists />
    return(
        <main>
            <LoadingOverlay loading={loadingScreen} />
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de Livros</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <CardItem openModal={openModalCard} item={book} />
                    ))}
                    </div>
                </div>
            </div>

            <ModalEdit
                item={selectedItem} setItem={setSelectedItem}
                status={statusModal} setStatus={setStatusModal}
                name={selectedItem?.titulo}
                resumo={selectedItem?.resumo}
                ano_lancamento={selectedItem?.ano_lancamento}
                editora_id={selectedItem?.editoras_id}
                autor_id={selectedItem?.autores_id}
                onDelete={handleDelete} onEdit={directEdit}
            />
        </main>
    )
}