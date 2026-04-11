import { createContext, useContext, useState, ReactNode } from "react";

const VALID_EMAIL = "alana.carolina@appmax.com.br";
const VALID_PASSWORD = "Alana102030@";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  userEmail: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userEmail, setUserEmail] = useState<string | null>(() =>
    sessionStorage.getItem("auth_user")
  );

  const isAuthenticated = userEmail !== null;

  const login = (email: string, password: string): boolean => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      sessionStorage.setItem("auth_user", email);
      setUserEmail(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem("auth_user");
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    // Fallback for HMR edge cases — will redirect to login anyway
    return {
      isAuthenticated: false,
      login: () => false,
      logout: () => {},
      userEmail: null,
    } as AuthContextType;
  }
  return ctx;
};
