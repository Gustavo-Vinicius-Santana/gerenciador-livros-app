import React, { useState, useEffect} from "react";
import { Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import ModalEdit from "../../../components/Modals/ModalEdit";

import { useEditoraData } from "../../../services/hooks/useEditoraData";

export default function EditoraShow(){
    const navigate = useNavigate();
    const { buscarTodasEditoras, deletarEditora, loading } = useEditoraData();
    const [editoras, setEditoras] = useState([]);

    const [selectedItem, setSelectedItem] = useState(null);
    const [statusModal, setStatusModal] = useState(false);


    const openModalCard = (item) => {
        setStatusModal(true);
        setSelectedItem(item);
    }
    const directEdit = () => {
        navigate(`/editora/editar/${selectedItem.id}`);
    }


    useEffect(() => {
        const fetchEditoras = async () => {
            await buscarTodasEditoras(setEditoras);
        };

      fetchEditoras();
    }, []);
    const handleDelete = async () => {
        await deletarEditora(selectedItem);
    };


    if (loading) return <p>Carregando...</p>;
    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de editoras</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {editoras.map((editora) => (
                        <div onClick={() => openModalCard(editora)} key={editora.id} className=" cursor-pointer bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{editora.nome}</h2>
                        </div>
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