import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ModalEdit from "../../../components/Modals/ModalEdit";
import CardItem from "../../../components/Cards/CardItem";
import LoadingLists from "../../../components/Loadings/LoadingLists";
import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";

import { useAutorData } from "../../../services/hooks/useAutorData";

export default function AutoresShow(){
    const navigate = useNavigate();
    const { buscarTodosAutores, deletarAutor, loading } = useAutorData();
    const [autores, setAutores] = useState([]);


    const [selectedItem, setSelectedItem] = useState(null);
    const [statusModal, setStatusModal] = useState(false);
    const [loadingScreen, setLoadingScreen] = useState(false);


    const openModalCard = (item) => {
        setStatusModal(true);
        setSelectedItem(item);
    }
    const directEdit = () => {
        navigate(`/autor/editar/${selectedItem.id}`);
    }



    useEffect(() => {
        const fetchAutores = async () => {
            await buscarTodosAutores(setAutores);
        };

        fetchAutores();
    }, []);
    const handleDelete = async () => {
        try{
            setLoadingScreen(true);
            await deletarAutor(selectedItem);
        }finally{
            setLoadingScreen(false);
            setSelectedItem(null);
        }
    };


    if (loading) return <LoadingLists />
    return(
        <main>
            <LoadingOverlay loading={loadingScreen} />
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de autores</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {autores.map((autor) => (
                        <CardItem openModal={openModalCard} item={autor} />
                    ))}
                    </div>
                </div>
            </div>

            <ModalEdit
                item={selectedItem} setItem={setSelectedItem}
                status={statusModal} setStatus={setStatusModal}
                name={selectedItem?.nome}
                onDelete={handleDelete} onEdit={directEdit}
            />
        </main>
    )
}