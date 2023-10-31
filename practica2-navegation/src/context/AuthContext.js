import React, { useState, useEffect, createContext, useCallback } from 'react';
import { storageController } from "../api/token";
import { userController } from '../api/users';
import { tokenExpired } from '../utils/tokenExpired';
import { agragarTodosFavoritos, elimarStorageFavorite } from '../api/favorito';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            getSession();
        }, []);

    const login = async (token) => {
        try {
            console.log('Token del Login: ', token);
            await storageController.setToken(token);
            const response = await userController.getMe();
            if(response.favoritos) {
                await agragarTodosFavoritos(response.favoritos);
            }
            setUser(response);
            setLoading(false);
            // console.log('Login: ',response);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const logout = async () => {
        try {
            await storageController.removeToken();
            await elimarStorageFavorite();
            setUser(null);
            setLoading(false);            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const getSession = async () => {
        const token = await storageController.getToken();
        // console.log('Token ==>', token);
        if (!token) {
            logout();
            setLoading(false);
            return;
        }
        if (tokenExpired(token)) {
            logout();
        } else {
            login(token)
        }
    }

    const upDateUser = useCallback((key, value) => {
        setUser((prevUser) => ({ ...prevUser, [key]: value }));
    }, []);

    const data = {
        user,
        login,
        logout,
        upDateUser,
    }
    if (loading) return null;
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}