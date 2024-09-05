import React from "react";

export default function InputTime({id, titulo, setValor}){

    const today = new Date().toISOString().split('T')[0];
    const handleDateChange = (event) => {
        const selectedDate = event.target.value; // Ex: "2024-09-01"
        const dateObject = new Date(selectedDate);
        const yearOnly = dateObject.getFullYear(); // Extrai somente o ano
        setValor(yearOnly);
    };

    return(
        <>
            <label htmlFor="lancamento" className="block text-gray-700 font-medium mb-2">
                {titulo}
            </label>
            <input id={id} type="date"
                onChange={handleDateChange}
                max={today} />
        </>
    )
}