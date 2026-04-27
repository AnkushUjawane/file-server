import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard"

export default function AppRoutes() {
    const {token} = useContext(AuthContext);

    if(!token){
        return(
            <>
                <Login />
                <Signup />
            </>
        );
    }

    return <Dashboard />;
}