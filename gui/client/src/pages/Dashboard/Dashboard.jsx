import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";

import Files from "../Files/Files";
import Shared from "../Shared/Shared";
import Profile from "../Profile/Profile";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
  
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/files" element={<Files />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}