import { getToken } from "@/utils/secureStore";
import { createContext, useContext, useEffect, useState } from "react";

interface IAuthProps {
  token?: string | null;
  profile?: any;
  onLogin?: (password: string, email: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const MY_TOKEN = "JWT_AUTH";
const AuthContext = createContext<IAuthProps>({});

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    async function loadToken() {
      const storedToken = await getToken("token");
      setToken(storedToken);
    }
    loadToken();
  }, []);

  const value: IAuthProps = {
    profile: "ini profile",
    token: token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
