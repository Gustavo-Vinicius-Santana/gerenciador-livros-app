import React from "react";

export default function ButtonLoading({titulo, loading, action}){

    return(
        <>
            <button
                type="submit"
                onClick={action}
                disabled={loading}
                className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
            >
                {loading ? `${titulo}...` : `${titulo}`}
            </button>
        </>
    )
}