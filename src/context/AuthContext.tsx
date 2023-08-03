import { createContext, useState } from "react";

interface AuthContextProps {
  children: JSX.Element;
}

interface AuthContext {
  auth: any;
  login: (userData: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext>({
  auth: undefined,
  login: undefined,
  logout: undefined,
});

export function AuthProvider(props: AuthContextProps): JSX.Element {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
