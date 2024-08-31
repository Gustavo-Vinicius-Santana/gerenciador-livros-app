import api from "./api";

export const getEditoras = async() => {
    try{
        const response = await api.get('/editora');
        return response.data;
    }
    catch(error){
        throw error;
    }
}