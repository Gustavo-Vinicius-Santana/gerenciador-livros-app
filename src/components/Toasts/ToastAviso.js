import React from "react";
import { Toast } from "flowbite-react";

export default function ToastAviso({show, setShow, mensagem}) {
    return(
        <>
            {show && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 max-w-xs p-4 bg-white rounded-lg shadow-lg">
                    <Toast>
                        <div className="ml-3 text-sm font-normal text-gray-800">
                            {mensagem}
                        </div>
                        <Toast.Toggle className="absolute top-0 right-0 mt-2 mr-2" onDismiss={() => setShow(false)} />
                    </Toast>
                </div>
            )}
        </>
    )
}