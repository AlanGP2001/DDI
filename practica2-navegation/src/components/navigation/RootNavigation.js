import React from 'react'
import AppNavigation from "./AppNavigation";
import AuthScreen from "../../screen/Auth/AuthScreen";

export default function RootNavitation(){
    const user = null;
    return user ? <AppNavigation /> : <AuthScreen />;
}