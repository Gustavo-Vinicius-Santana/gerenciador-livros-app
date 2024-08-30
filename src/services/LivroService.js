import api from "./api";

export const getLivros = async() => {
    try{
        const response = await api.get('/livro');
        return response.data;
    }
    catch(error){
        throw error;
    }
}