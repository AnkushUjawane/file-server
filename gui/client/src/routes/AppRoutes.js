import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard"

export default function AppRoutes() {
    const {token} = useContext(AuthContext);

    return(
        <BrowserRouter>
            {!token ? (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            ) : (
                <Dashboard />
            )}
        </BrowserRouter>
    );
}