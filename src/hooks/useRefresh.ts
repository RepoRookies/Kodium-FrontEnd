import axios from "axios";
import { useAuth } from "./useAuth";
import { IAuth } from "@/context/AuthProvider";
export const useRefresh = () => {
     const server_url = import.meta.env.VITE_SERVER_URL
     const {auth,setAuth} = useAuth() 
     console.log(auth)
     if(auth)return
     const refresh =  async() => {
        const res = await axios.get(`${server_url}/app/v1/user/refresh`,{withCredentials:true})
        // // console.log(res.data)
        const data: IAuth = (res.data.username)?res.data:null
        console.log(data)

        if(data)setAuth(prev=>({...prev,...res.data}))
    }
    return refresh()

}