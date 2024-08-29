import React from "react"
import { useState } from "react";
import NavList from "../NavList/NavList";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


    return(
        <header>
            <nav className="bg-black p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white font-bold text-xl">Gerenciador de livros</h1>

                    <NavList estilo="hidden md:flex space-x-4"/>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}

                        </button>
                    </div>
                </div>

                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <NavList estilo="flex flex-col space-y-2 p-4"/>
                </div>
            </nav>
        </header>
    )
}