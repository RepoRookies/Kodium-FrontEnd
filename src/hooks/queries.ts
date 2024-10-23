// import "dotenv/config"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { IProblemData } from "@/pages/ProblemCode/Sections/problem.interface"
import { ISubmissionData } from "@/pages/Submissions/Sections/submission.interface"
import { IAuth } from "@/context/AuthProvider"
const server_url = import.meta.env.VITE_SERVER_URL

const fetchProblems = ():Promise<IProblemData[]> => 
    axios.get(`${server_url}/app/v1/problems/get/all`).then((response) => response.data).then(data => data.problems)

const fetchProblemDetails = (title:string):Promise<IProblemData> => 
    axios.get(`${server_url}/app/v1/problems/get/${title}`).then((response) => response.data)

const fetchSubmissionsDetails = (auth:IAuth):Promise<ISubmissionData[]> => 
    axios.get(`${server_url}/app/v1/submission/${auth.username}`).then((response) =>{console.log(response.data);return response.data.submissions})


export const useProblems = () => useQuery({

    queryKey : ['problems'],
    queryFn : fetchProblems
})

export const useProblemDetails = (title:string) => useQuery({
    queryKey : ['problem',title],
    queryFn : ()=>fetchProblemDetails(title)
})

export const useUserSubmissions = (auth:IAuth) => useQuery({
    queryKey : ['submissions',auth],
    queryFn: ()=>fetchSubmissionsDetails(auth),
})