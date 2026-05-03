import { useState } from "react";
import "./Signup.css"
import api from "../../services/api";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try{
            await api.post("/auth/signup", {
                username,
                password
            })

            alert("Signup Successfull, You can now Login");
        } catch (err){
            alert(err.response?.data?.message || "Signup Failed");
        }
    }
    return (
        <div>
            <h2>Signup</h2>
            <input 
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    )
}