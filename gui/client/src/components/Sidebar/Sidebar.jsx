import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();                
    navigate("/");                     
  };

  return (
    <div className="sidebar">
      <h2>FileServer</h2>

      <Link to="/files">Files</Link>
      <Link to="/shared">Shared</Link>
      <Link to="/profile">Profile</Link>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}