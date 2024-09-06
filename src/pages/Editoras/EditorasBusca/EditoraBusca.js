import React, { useState, useEffect } from "react";

import { useEditoraData } from "../../../services/hooks/useEditoraData";

import InputText from "../../../components/Forms/Inputs/InputText";
import ButtonLoading from "../../../components/Forms/Buttons/ButtonLoading";

export default function EditoraBusca(){
    const { buscarEditora, loading, setLoading, mensagem, setMensagem } = useEditoraData();

    const [nome, setNome] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        setLoading(false);
    }, []);

    const fetchEditoras = async () => {
        if (nome.trim() === '') {
        setResultados([]);
        setMensagem('');
        setLoading(false);
        return;
        }

        setLoading(true);

        await buscarEditora(nome, setResultados);
    };

    const handleBuscaClick = () => {
        fetchEditoras();
    };


    return(
        <main>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Buscar Editora</h1>
                    <div className="mb-6">
                        <InputText id="nome" titulo="Buscar editora:"
                        placeholder="Digite o nome da editora"
                        tipo="text" valor={nome} setValor={setNome}/>
                    </div>

                    <div className="flex justify-center mb-6">
                        <ButtonLoading titulo="procurar editora" loading={loading} action={handleBuscaClick} />
                    </div>

                    {loading ? (
                        <p>Carregando...</p>
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