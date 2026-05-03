import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>FileServer</h2>

      <Link to="/files">Files</Link>
      <Link to="/shared">Shared</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}