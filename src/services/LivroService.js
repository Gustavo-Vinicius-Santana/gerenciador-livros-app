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

export const createLivro = async (livro) => {
    try {
      const response = await api.post('/livro', livro);
      return response.data;
    } catch (error) {
      throw error;
    }
}

export const searchLivro = async (nome) => {
    try{
        const response = await api.get(`/livros/busca?titulo=${nome}`);
        return response.data;
    } catch (error){
        throw error;
    }
}