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

export const createEditora = async(editora) => {
    try{
        const response = await api.post('/editora', editora);
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const searchEditora = async (name) => {
    try{
        const response = await api.get(`/editoras/busca?nome=${name}`);
        return response.data;
    } catch (error){
        throw error;
    }
}