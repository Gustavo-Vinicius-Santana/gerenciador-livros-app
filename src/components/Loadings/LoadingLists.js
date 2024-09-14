import React from "react";

export default function LoadingLists(){

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
            </div>
        </div>
    )
}