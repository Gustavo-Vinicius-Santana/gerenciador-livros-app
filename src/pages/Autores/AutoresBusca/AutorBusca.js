import React, { useState, useEffect } from "react";

import InputText from "../../../components/Forms/Inputs/InputText";
import ButtonLoading from "../../../components/Forms/Buttons/ButtonLoading";
import LoadingMin from "../../../components/Loadings/LoadingMin";

import { useAutorData } from "../../../services/hooks/useAutorData";

export default function AutorBusca(){
    const [resultados, setResultados] = useState([]);
    const [nome, setNome] = useState('');
    const { buscarAutor, mensagem, setMensagem, loading, setLoading } = useAutorData();

    useEffect(() => {
        setLoading(false);
    }, []);


    const fetchAutores = async () => {
        if (nome.trim() === '') {
        setResultados([]);
        setMensagem('');
        setLoading(false);
        return;
        }

        await buscarAutor(nome, setResultados);
    };
    const handleBuscaClick = () => {
        fetchAutores();
    };

    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Buscar Autor</h1>
                    <div className="mb-6">
                        <InputText id="nome" titulo="Buscar Autor:"
                        placeholder="Digite o nome do autor"
                        tipo="text" valor={nome} setValor={setNome}/>
                    </div>

                    <div className="flex justify-center mb-6">
                        <ButtonLoading titulo="procurar autor" loading={loading} action={handleBuscaClick} />
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-start">
                            <LoadingMin />
                        </div>
                    ) : (
                        <>
                        {mensagem && <p>{mensagem}</p>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {resultados.map(autor => (
                                <div key={autor.id} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold mb-2">{autor.nome}</h2>
                                    </div>
                                ))}
                        </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}