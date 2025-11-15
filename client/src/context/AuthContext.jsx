import { createContext, useState, useContext } from "react"; 
import { registerRequest } from "../api/auth.js";

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

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res); 
      setUser(res.Data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, user, IsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}