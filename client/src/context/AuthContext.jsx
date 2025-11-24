import { useEffect, useState, useContext, createContext } from "react"; 
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth.js";
const Link = (props) => <a {...props}>{props.children}</a>;
const useNavigate = () => {
    // Simulación de navegación
    return (path) => console.log(`Navegando a: ${path}`);
}; 

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext); 
  if (!context) {
    throw new Error("useAuth debe usarse con AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res); 
      setUser(res.Data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, user, IsAuthenticated, errors, }}>
      {children}
    </AuthContext.Provider>
  );
}