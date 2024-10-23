import { createContext, useState } from "react";

export interface IAuth {
    username: string ;
    token: string ;
    email: string ;
    name: string ;
    role: string ;
} 

interface IAuthContext{
    auth : IAuth | null;
    setAuth :   React.Dispatch<React.SetStateAction<IAuth | null>>;
}
const AuthContext = createContext<IAuthContext|null>({
    auth : null,
    setAuth : () => null
});

export const AuthProvider = ({ children }:{ children: React.ReactNode }) => {
    const [auth, setAuth] = useState<IAuth|null>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext