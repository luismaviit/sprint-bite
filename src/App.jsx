import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Home/>
      <Home/>
    </AuthProvider>
  );
}

export default App;
