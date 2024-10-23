import axios from "axios";
import { useAuth } from "./useAuth";
import { IAuth } from "@/context/AuthProvider";
export const useRefresh = () => {
     
     const {auth,setAuth} = useAuth() 
     const refresh =  async() => {
        const res = await axios.get('/refresh',{withCredentials:true})
        console.log(res.data)
        const data: IAuth | null = (res.data.username)?res.data:null
        if(data)setAuth(data)
    }
    if(!auth)refresh()

}