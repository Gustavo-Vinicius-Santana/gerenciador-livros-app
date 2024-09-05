import React, { useState, useEffect } from 'react';
import { Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import { useLivroData } from '../../../services/hooks/useLivroData';

export default function LivrosShow(){
    const navigate = useNavigate();

    const { buscarTodosLivros, deletarLivro, loading } = useLivroData();

    const [books, setBooks] = useState([]);

    const [selectedBook, setSelectedBook] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (book) => {
        setSelectedBook(book);
        setIsOpen(true);
      };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedBook(null);
    };

    useEffect(() => {
        const fetchLivros = async () => {
            await buscarTodosLivros(setBooks);
        };

      fetchLivros();
    }, []);

    const handleDelete = async () => {
        await deletarLivro(selectedBook);
      };


    if (loading) return <p>Carregando...</p>;

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de Livros</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <div onClick={() => openModal(book)} key={book.id} className="cursor-pointer bg-white p-6 rounded-lg shadow-lg">
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


            {isOpen && selectedBook && (
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center`}>
                    <Modal
                        className="z-50"
                        size={`md`}
                        show={isOpen}
                        onClose={closeModal}
                    >
                        <Modal.Header className="p-5">{selectedBook.titulo}</Modal.Header>
                            <Modal.Body>
                                <p><strong>Resumo:</strong> {selectedBook.resumo}</p>
                                <p><strong>Ano de Lançamento:</strong> {selectedBook.ano_lancamento}</p>
                                <p><strong>Autor:</strong> {selectedBook.autores_id}</p>
                                <p><strong>Editora:</strong> {selectedBook.editoras_id}</p>
                            </Modal.Body>
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
                                        onClick={() => navigate(`/livro/editar/${selectedBook.id}`)}
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