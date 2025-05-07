import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        role: "client",
        id: "Client-2025-001",
        email: "john.doe@example.com",
        phone: "+44 7700 900123",
      })

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login,setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};