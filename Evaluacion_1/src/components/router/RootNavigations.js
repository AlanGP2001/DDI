import AppNavigation from "./AppNavigation";
import Home from "../../screen/home/Home";

export default function RootNavitation(){
    const { user } = 0;

    return user ? <AppNavigation /> : <Home />;
}