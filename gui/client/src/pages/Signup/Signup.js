import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
import api from "../../services/api";

export default function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try{
            await api.post("/auth/signup", {
                username,
                password
            })

            alert("Signup Successfull, You can now Login");
            navigate("/login");
        } catch (err){
            alert(err.response?.data?.message || "Signup Failed");
        }
    }
    return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Signup</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}