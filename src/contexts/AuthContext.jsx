import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  clearAccessToken,
  getAccessToken,
  getMe,
  login as apiLogin,
  putAccessToken,
  register as apiRegister,
} from "../api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    async function boot() {
      try {
        if (getAccessToken()) {
          const me = await getMe();
          setUser(me);
        }
      } catch (e) {
        clearAccessToken();
        setUser(null);
      } finally {
        setInitializing(false);
      }
    }
    boot();
  }, []);

  const login = async ({ email, password }) => {
    const token = await apiLogin({ email, password });
    putAccessToken(token);
    const me = await getMe();
    setUser(me);
  };

  const register = async ({ name, email, password }) => {
    await apiRegister({ name, email, password });
  };

  const logout = () => {
    clearAccessToken();
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, initializing, login, register, logout, isAuthed: !!user }),
    [user, initializing]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
