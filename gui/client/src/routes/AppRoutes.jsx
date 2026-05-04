import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Files from "../pages/Files/Files";
import Shared from "../pages/Shared/Shared";
import Profile from "../pages/Profile/Profile";

export default function AppRoutes() {
  const { token } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/files" />}
        />
        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/files" />}
        />

        {/* PROTECTED ROUTES */}
        <Route
          path="/"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route path="files" element={<Files />} />
          <Route path="shared" element={<Shared />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={token ? "/files" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}