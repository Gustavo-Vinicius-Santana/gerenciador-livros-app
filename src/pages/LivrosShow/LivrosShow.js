import React, { useState, useEffect } from 'react';

export default function LivrosShow(){

    const fetchBooks = async () => {
        // Simulação de dados, substitua com chamada à sua API real
        return [
            { id: 1, title: 'Livro 1', summary: 'Resumo do livro 1', author: 'Autor 1', publisher: 'Editora 1' },
            { id: 2, title: 'Livro 2', summary: 'Resumo do livro 2', author: 'Autor 2', publisher: 'Editora 2' },
            { id: 3, title: 'Livro 3', summary: 'Resumo do livro 3', author: 'Autor 3', publisher: 'Editora 3' },
        ];
    };
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const loadBooks = async () => {
        const booksData = await fetchBooks();
        setBooks(booksData);
      };

      loadBooks();
    }, []);

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Lista de Livros</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                        <p className="text-gray-700 mb-4">{book.summary}</p>
                        <p className="text-gray-600">Autor: {book.author}</p>
                        <p className="text-gray-600">Editora: {book.publisher}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
}