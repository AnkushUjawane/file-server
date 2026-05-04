import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />   
      </div>
    </div>
  );
}