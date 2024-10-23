import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';    
import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';

interface props {
  code:string,
  language:string
  input:string,
  setOutput:React.Dispatch<React.SetStateAction<string>>
}

const Run: React.FC<props> = ({ code,language,input,setOutput}) => {
  const [loadingstate, setLoadingState] = useState<boolean>(false);
  const timeout = 3000;

  // const fetchSubmissionData = (): Promise<any> => {
  //   return new Promise((resolve) => {
  //     setLoadingState(true);
  //     setTimeout(() => {
  //       resolve(submissionData);
  //       submitCode();
  //     }, timeout);
  //   });
  // };

  useEffect(() => {
    if (loadingstate) {
      const loadId = toast.loading('Running Code...');
      setTimeout(() => {
        toast.dismiss(loadId);
      }, timeout);
      setLoadingState(false);
    }
  }, [loadingstate]);
  const {auth} = useAuth()
  const server_url = import.meta.env.VITE_SERVER_URL
  const runCode = async() => {
    
    setLoadingState(true)
    try{
      if(!auth){
        
        const error: string = 'Please login to run code';
        toast.error(error);
      }
      else if(auth.role=="admin") {
        
        const error: string = `Admin's can't run code`;
        toast.error(error);
      }
      else if (code&&language) {
      
        const payload = {program:code,language,input}
        console.log(payload)
        let runSuccess: boolean = false;
        console.log(JSON.stringify(payload));
        const submission = await axios.post(`${server_url}/app/v1/submission/run`,payload,{ headers: { Authorization: `Bearer ${auth.token}` },withCredentials:true})
        if(submission.data.success) runSuccess = true
        if (runSuccess) {
          setOutput(submission.data.result)
          toast.success('Ran Successfully!');

        } else {
          const error: string = 'Error Running Code! Please Try Again.';
          toast.error(error);
        }
      }
      else {
        const error: string = 'Error Running Code! Please Try Again.';
        toast.error(error);
      }
    }
    catch(err){
      console.log(err)
      toast.error('Error Submitting Code! Please Try Again.');
    }
    
    setLoadingState(false)
  };
  return (
    <div className="p-4 pt-0 text-right">
      <Button
        variant="success"
        size="lg"
        className="font-bold uppercase bg-black text-white"
        onClick={runCode}
        disabled={loadingstate}
      >
        Run
      </Button>
    </div>
  );
};

export default Run;
