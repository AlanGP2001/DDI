import AppNavigation from "./AppNavigation";
import AuthScreen from "../../screen/Auth/AuthScreen";
import { useAuth } from "../../hooks/useAuth";

export default function RootNavitation(){
    const { user } = useAuth();
    console.log('UserAuth: ', user);
    return user ? <AppNavigation /> : <AuthScreen />;
}