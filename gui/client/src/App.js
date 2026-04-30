import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <Toaster position="bottom-right"/>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
