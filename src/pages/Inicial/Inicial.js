import React from "react";
import { Card, Accordion, Tabs } from "flowbite-react";


export default function Inicial(){

    return(
        <main id="content" className="py-16">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800">Bem-vindo ao gerenciador de livros</h2>
                <p className="mt-4 text-gray-600">Sua plataforma web para gerenciar livros</p>

                <div className="max-w-md mx-auto mt-10">
                    <Accordion collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title className="p-4">O que é o gerenciador de livros?</Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Uma aplicação para gerenciar livros de maneira facil e eficiente. Podendo acessa-los em qualquer dispositivo.
                            </p>
                            </Accordion.Content>
                        </Accordion.Panel>

                        <Accordion.Panel>
                            <Accordion.Title className="p-4">Beneficios de usar o nosso APP</Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-4 pl-4 p-0 m-0 text-gray-500">
                                O sistema tem como principais beneficios para o usuario:
                            </p>
                            <ul className="list-disc pl-6 p-0 m-0 text-left text-gray-500">
                                <li>
                                    Facilidade de uso
                                </li>
                                <li>
                                    Pode ser acessado em qualquer dispositivo
                                </li>
                                <li>
                                    Seus livros ficam salvos na base de dados
                                </li>
                                <li>
                                    Compartilhe seus livros com outros usuarios
                                </li>
                            </ul>
                            </Accordion.Content>
                        </Accordion.Panel>

                        <Accordion.Panel>
                            <Accordion.Title className="p-4">Deseja colaborar?</Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-4 pl-4 p-0 m-0 text-gray-500">
                                Caso você tenha alguma sujestão, ideia ou achou algum bug, colabore com o projeto no  <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://github.com/gustavo-vinicius-santana/gerenciador-livros-app">repositorio</a>
                            </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">funcionalidades do app</h2>
                <p className="mt-4 text-gray-600">Temos uma serie de funcionalidades para gerenciamento de livros</p>

                <Tabs className="flex justify-center mt-6" aria-label="Default tabs" variant="default">
                    <Tabs.Item active title="Livros">
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card href={`/livro/cadastro`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Cadastro de livros</h3>
                                <p className="mt-4 text-gray-600">cadastre seus livros de maneira facil em nossa base de dados</p>
                            </Card>

                            <Card href={`/livro/busca`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Pesquisar por livros</h3>
                                <p className="mt-4 text-gray-600">busque por todos os livros cadastrados</p>
                            </Card>

                            <Card href={`/livro`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Ver todos os livros</h3>
                                <p className="mt-4 text-gray-600">Veja todos os livros livros cadastrados por outros usuarios</p>
                            </Card>
                        </div>
                    </Tabs.Item>

                    <Tabs.Item title="Autores">
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card href={`/autor/cadastro`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Cadastro de autores</h3>
                                <p className="mt-4 text-gray-600">cadastre autores de maneira facil em nossa base de dados</p>
                            </Card>

                            <Card href={`/autor/busca`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">pesquise por autores</h3>
                                <p className="mt-4 text-gray-600">busque por todos os autores cadastrados</p>
                            </Card>

                            <Card href={`/autor`}className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Ver todos os autores</h3>
                                <p className="mt-4 text-gray-600">Veja todos os autores cadastrados por outros usuarios</p>
                            </Card>
                        </div>
                    </Tabs.Item>

                    <Tabs.Item title="Editoras">
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card href={`/editora/cadastro`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Cadastro de editoras</h3>
                                <p className="mt-4 text-gray-600">cadastre editoras de maneira facil em nossa base de dados</p>
                            </Card>

                            <Card href={`/editora/busca`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">pesquise por editoras</h3>
                                <p className="mt-4 text-gray-600">busque por todas as editoras cadastradas</p>
                            </Card>

                            <Card href={`/editora`} className="max-w-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Ver todas as editoras</h3>
                                <p className="mt-4 text-gray-600">Veja todas as editoras cadastradas por outros usuarios</p>
                            </Card>
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>
      </main>
    )
}