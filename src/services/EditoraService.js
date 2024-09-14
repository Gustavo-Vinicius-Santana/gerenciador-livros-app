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

export const getEditoraById = async (id) => {
    try {
      const response = await api.get(`/editora/${id}`);
      return response.data;
    } catch (error) {
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

export const editEditora = async (id, livro) => {
    try {
      const response = await api.put(`/editora/${id}`, livro);
      return response.data;
    } catch (error) {
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

export const deleteEditora = async (id) => {
    try {
      const response = await api.delete(`/editora/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
};