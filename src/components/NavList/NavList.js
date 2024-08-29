import React from "react";
import { Dropdown } from "flowbite-react";



export default function NavList({estilo}){

    return(
        <ul className={estilo}>
            <li>
                <Dropdown
                    label={
                        <span className="text-gray-300 hover:text-white">
                            Livros
                        </span>}
                    inline>
                    <Dropdown.Item>cadastrar</Dropdown.Item>
                    <Dropdown.Item>pesquisar</Dropdown.Item>
                    <Dropdown.Item>mostrar todos</Dropdown.Item>
                </Dropdown>
            </li>
            <li>
                <Dropdown
                    label={
                        <span className="text-gray-300 hover:text-white">
                            Autores
                        </span>}
                    inline>
                    <Dropdown.Item>cadastrar</Dropdown.Item>
                    <Dropdown.Item>pesquisar</Dropdown.Item>
                    <Dropdown.Item>mostrar todos</Dropdown.Item>
                </Dropdown>
            </li>
            <li>
                <Dropdown
                    label={
                        <span className="text-gray-300 hover:text-white">
                            Editoras
                        </span>}
                    inline>
                    <Dropdown.Item>cadastrar</Dropdown.Item>
                    <Dropdown.Item>pesquisar</Dropdown.Item>
                    <Dropdown.Item>mostrar todos</Dropdown.Item>
                </Dropdown>
            </li>
        </ul>
    )
}