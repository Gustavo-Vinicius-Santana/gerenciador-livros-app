import React, { createContext, useState, useEffect } from 'react';

// Criando o contexto
const AuthContext = createContext();

// Função para fornecer o contexto
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Função para buscar o token do localStorage ao carregar o componente
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Função para atualizar o token e salvar no localStorage
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  // Função para remover o token
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAuth = () => React.useContext(AuthContext);