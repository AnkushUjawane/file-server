import { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import {AuthContext} from "../../context/AuthContext";

export default function Login() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try{
            const res = await api.post("/auth/login", {
                username,
                password
            })
            login(res.data.data.token);

            navigate("/files");
            
        } catch(err){
            alert(err.response?.data?.message || "Login Failed"); 
        }
    };

    return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}