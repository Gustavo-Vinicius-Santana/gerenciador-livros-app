import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";

import { useAuth } from "../../contexts/AuthProvider";

import LoadingLists from "../Loadings/LoadingLists";
import UserIcon from "../UserIcon/UserIcon";

export default function NavList({estilo}){
    const { token } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            console.log("token dentro do efect", token)
        setIsLoading(false);
        };

        checkToken();
    }, [token]);

    if (isLoading) {
        return <div></div>
    }

    return(
        <ul className={estilo}>
            <li>
                <Dropdown
                    className="p-2 rounded-sm"
                    label={
                        <span className="text-lg text-gray-300 hover:text-white">
                            Livros
                        </span>}
                    inline>
                    <Dropdown.Item className="hover:underline" as="a" href={`/livro/cadastro`}>cadastrar</Dropdown.Item>
                    <Dropdown.Item className="hover:underline" as="a" href={`/livro/busca`}>pesquisar</Dropdown.Item>
                    <Dropdown.Item className="hover:underline" as="a" href={`/livro`}>mostrar todos</Dropdown.Item>
                </Dropdown>
            </li>
            <li>
                <Dropdown
                    className="p-2 rounded-sm"
                    label={
                        <span className="text-lg text-gray-300 hover:text-white">
                            Autores
                        </span>}
                    inline>
                    <Dropdown.Item className="hover:underline" as="a" href={`/autor/cadastro`}>cadastrar</Dropdown.Item>
                    <Dropdown.Item className="hover:underline" as="a" href={`/autor/busca`}>pesquisar</Dropdown.Item>
                    <Dropdown.Item className="hover:underline" as="a" href={`/autor`}>mostrar todos</Dropdown.Item>
                </Dropdown>
            </li>
            <li>
                <Dropdown
                    className="p-2 rounded-sm"
                    label={
                        <span className="text-lg text-gray-300 hover:text-white">
                            Editoras
                        </span>}
                    inline>
                    <Dropdown.Item className="hover:underline" as="a" href={`/editora/cadastro`}>cadastrar</Dropdown.Item>
                    <Dropdown.Item className="hover:underline" as="a" href={`/editora/busca`}>pesquisar</Dropdown.Item>
                    <Dropdown.Item className="hover:underline" as="a" href={`/editora`}>mostrar todos</Dropdown.Item>
                </Dropdown>
            </li>

            <li>
                <a href={token ? `/usuario/tela` : `/usuario/login`}>
                    <UserIcon />
                </a>
            </li>
        </ul>
    )
}