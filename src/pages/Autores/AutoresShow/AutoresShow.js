import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import { useAutorData } from "../../../services/hooks/useAutorData";

export default function AutoresShow(){
    const navigate = useNavigate();

    const { buscarTodosAutores, deletarAutor, loading } = useAutor();

    const [autores, setAutores] = useState([]);
    const [selectedAutor, setSelectedAutor] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (book) => {
        setSelectedAutor(book);
        setIsOpen(true);
      };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedAutor(null);
    };


    useEffect(() => {
        const fetchAutores = async () => {
            await buscarTodosAutores(setAutores);
        };

        fetchAutores();
    }, []);


    const handleDelete = async () => {
        await deletarAutor(selectedAutor);
    };


    if (loading) return <p>Carregando...</p>;
    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de autores</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {autores.map((autor) => (
                        <div onClick={() => openModal(autor)} key={autor.id} className="cursor-pointer bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{autor.nome }</h2>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            {isOpen && selectedAutor && (
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center`}>
                    <Modal
                        className="z-50"
                        size={`md`}
                        show={isOpen}
                        onClose={closeModal}
                    >
                        <Modal.Header className="p-5">{selectedAutor.nome}</Modal.Header>
                            <Modal.Footer>
                                <div className="w-full flex justify-between p-4">
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                        onClick={handleDelete}
                                    >
                                        Deletar
                                    </button>

                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        onClick={() => navigate(`/autor/editar/${selectedAutor.id}`)}
                                    >
                                        Editar
                                    </button>
                                </div>
                            </Modal.Footer>
                    </Modal>
                </div>
            )}
        </main>
    )
}