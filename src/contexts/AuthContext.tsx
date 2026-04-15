import { createContext, useContext, useState, ReactNode } from "react";

const VALID_EMAIL = "alana.carolina@appmax.com.br";
const DEFAULT_PASSWORD = "Alana102030@";
const PASSWORD_OVERRIDE_KEY = "auth_password_override";

function getValidPassword(): string {
  return localStorage.getItem(PASSWORD_OVERRIDE_KEY) ?? DEFAULT_PASSWORD;
}

export function updatePassword(newPassword: string): void {
  localStorage.setItem(PASSWORD_OVERRIDE_KEY, newPassword);
}

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
    if (email === VALID_EMAIL && password === getValidPassword()) {
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
    return {
      isAuthenticated: false,
      login: () => false,
      logout: () => {},
      userEmail: null,
    } as AuthContextType;
  }
  return ctx;
};

export { VALID_EMAIL };
