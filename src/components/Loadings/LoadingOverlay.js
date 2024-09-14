import React from "react";

export default function LoadingOverlay({loading}) {
    if (!loading) return null;
    console.log("acontecendo loading")
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
        </div>
    )
}