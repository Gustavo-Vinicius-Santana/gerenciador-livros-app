import React from "react";

export default function SelectYear({id, titulo, valor, setValor}){
    const currentYear = new Date().getFullYear();

    const years = [];
    for (let i = 0; i <= currentYear; i++) {
      years.push(i);
    }
    const reversedYears = years.reverse();

    const handleDateChange = (event) => {
        const selectedYear = event.target.value;
        setValor(selectedYear);
        console.log(years)
    };

    return(
        <>
            <label id={id} htmlFor="lancamento" className="block text-gray-700 font-medium mb-2">
                {titulo}
            </label>

            <select
                id={id}
                name="year"
                onChange={handleDateChange}
                required
                className="block w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 relative"
                value={valor}
            >
            {reversedYears.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
                ))
            }
            </select>
        </>

    )
}

SelectYear.defaultProps = {
    valor: "2024"
};