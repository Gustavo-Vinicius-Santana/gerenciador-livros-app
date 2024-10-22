import api from "./api";

// Login de usuário (obtém o token)
export const loginUsuario = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};

// Logout de usuário (apenas remove o token, pode ser tratado no hook ou context)
export const logoutUsuario = async (token) => {
    try {
      await api.post('/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      throw error;
    }
};

// Cadastro de usuário
export const registerUsuario = async (usuario) => {
  try {
    const response = await api.post('/register', usuario);
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};

// Editar usuário (requisição autenticada via token)
export const editUsuario = async (usuario, token) => {
  try {
    const response = await api.put(`/user`, usuario, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Deletar usuário (requisição autenticada via token)
export const deleteUsuario = async (token) => {
  try {
    const response = await api.delete(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Dados do usuario em detalhes
export const dados = async (token) => {
  try {
    const response = await api.get(`/users/userDetail`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return response.data;
  }catch (error) {
    throw error;
  }
}