import api from "./api";

export const getAutores = async() => {
    try{
        const response = await api.get('/autor');
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const createAutor = async(autor) => {
    try{
        const response = await api.post('/autor', autor);
        return response.data;
    }
    catch(error){
        throw error;
    }
}