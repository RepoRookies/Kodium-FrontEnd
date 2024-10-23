import AuthContext from "@/context/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
    const state = useContext(AuthContext) 
    if(state == null)throw new Error(`Auth state not configured`)
    else if(state == undefined)throw new Error(`Auth state does not exist`)
    return state
}
