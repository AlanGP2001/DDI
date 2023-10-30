import React, { useState, useEffect, createContext, useCallback } from 'react';
import { storageController } from "../api/token";
import { userController } from '../api/users';
import { tokenExpired } from '../utils/tokenExpired';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (token) => {
        try {
            console.log('Token del Login: ', token);
            await storageController.setToken(token);
            const response = await userController.getMe();
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

    useEffect(() => {
        getSession();
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