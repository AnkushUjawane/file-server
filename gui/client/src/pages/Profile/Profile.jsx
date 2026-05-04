import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";

export default function Profile() {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.data);
      } catch (err) {
        console.log("Error fetching user");
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  const copyUsername = () => {
    navigator.clipboard.writeText(user.username);
    alert("Username copied!");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Avatar */}
        <div className="avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>

        {/* Info */}
        <h2>{user.username}</h2>
        <p className="subtext">User ID: {user.id}</p>

        {/* Stats */}
        <div className="stats">
          <div>
            <h3>--</h3>
            <p>Files</p>
          </div>

          <div>
            <h3>--</h3>
            <p>Storage</p>
          </div>
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button onClick={copyUsername}>Copy Username</button>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}