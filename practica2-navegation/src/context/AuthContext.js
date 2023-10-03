import React, { useState, useEffect, createContext } from 'react';
import { storageController } from "../api/token";
import { userController } from '../api/users';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (token) => {
        try {
            // console.log('Token del Login: ', token);
            await storageController.setToken(token);
            const response = await userController.getMe();
            setUser(response);
            setLoading(false);
            console.log('Login: ',response);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const getSession = async () => {
        const token = await storageController.getToken();
        console.log('Token ==>', token);
        setLoading(false);
    }

    useEffect(() => {
        getSession();
    }, []);

    const data = {
        user,
        login,
        logout: () => console.log('Logout'),
        upDateUser: () => console.log('Update User')
    }
    if (loading) return null;
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}