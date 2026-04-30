import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
    const {logout} = useContext(AuthContext);

    return (
        <nav className="navbar">
            <h1>FileServer</h1>
            <button onClick={logout}>Logout</button>
        </nav>
    );
}