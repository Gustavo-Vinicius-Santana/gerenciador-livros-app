import React, { useEffect, useState, defaultPro} from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";

export default function ModalEdit({status, setStatus, item, setItem,
    name, onDelete, onEdit,
    resumo, ano_lancamento, autor_id, editora_id}){

    const closeModal = () => {
        setStatus(false);
        setItem(null);
    };

    return(
        <>
            {status && item && (
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center`}>
                    <Modal
                        className="z-50"
                        size={`md`}
                        show={status}
                        onClose={closeModal}
                    >
                        <Modal.Header className="p-5">{name}</Modal.Header>
                        <Modal.Body>
                            {resumo && <p><strong>Resumo:</strong> {resumo}</p>}
                            {ano_lancamento && <p><strong>Ano de Lançamento:</strong> {ano_lancamento}</p>}
                            {autor_id && <p><strong>Autor:</strong> {autor_id}</p>}
                            {editora_id && <p><strong>Editora:</strong> {editora_id}</p>}
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="w-full flex justify-between p-4">
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    onClick={() => onDelete()}
                                >
                                    Deletar
                                </button>

                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    onClick={() => onEdit()}
                                >
                                    Editar
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </>
    )
}

ModalEdit.defaultProps = {
    name: "sem nome",
    resumo: "",
    ano_lancamento: "",
    editora_id: "",
    autor_id: "",
};