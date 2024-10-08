import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import LoadingOverlay from "../../../components/Loadings/LoadingOverlay";
import LoadingLists from "../../../components/Loadings/LoadingLists";

import { useAutorData } from "../../../services/hooks/useAutorData";

export default function AutorEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const { buscarAutorId, editarAutor, mensagem, setMensagem, loading, setLoading } = useAutorData();

    const [autor, setAutor] = useState('');
    const [nome, setNome] = useState('');
    const [loadingScreen, setLoadingScreen] = useState(false);


    useEffect(() => {
        const fetchAutor = async () => {
            await buscarAutorId(id, setAutor, setNome);
        };

        fetchAutor();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMensagem('');

        const autorEditado = {
          nome,
        };

        console.log(autorEditado);

        try{
            setLoadingScreen(true)
            await editarAutor(id, autorEditado, setNome);
        }finally{
            setLoadingScreen(false)
        }
    };


    if (loading) return <LoadingLists />
    return(
        <main>
            <LoadingOverlay loading={loadingScreen} />
            <div><h1>{mensagem}</h1></div>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Editar Autor: {autor.nome}</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nome
                        </label>
                        <input
                        id="name"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome do autor"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                        />
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                        editar autor
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    )
}