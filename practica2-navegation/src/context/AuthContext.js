import React, { useState, useEffect, createContext } from 'react';
import { storageController } from "../api/token";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const login = async (token) => {
        try {
            console.log('Token del Login: ', token);
            await storageController.setToken(token);
        } catch (error) {
            console.log(error);
        }
    }

    const getSession = async () => {
        const token = await storageController.getToken();
        console.log('Token ==>', token);
    }

    useEffect(() => {
        getSession();
    }, []);

    const data = {
        user: null,
        login,
        logout: () => console.log('Logout'),
        upDateUser: () => console.log('Update User')
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}