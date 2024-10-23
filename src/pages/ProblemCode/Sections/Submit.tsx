import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { IProblemData } from './problem.interface';
import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';

interface props {
  problem:IProblemData | undefined,
  code:string,
  language:string
}

const Submit: React.FC<props> = ({ problem,code,language }) => {
  const [loadingstate, setLoadingState] = useState<boolean>(false);
  const timeout = 3000;
  const navigate = useNavigate();

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
      const loadId = toast.loading('Submitting Code...');
      setTimeout(() => {
        toast.dismiss(loadId);
      }, timeout);
      setLoadingState(false);
    }
  }, [loadingstate]);
  const {auth} = useAuth()
  const server_url = import.meta.env.VITE_SERVER_URL
  const submitCode = async() => {
    
    setLoadingState(true)
    try{
      if(!auth){
        
        const error: string = 'Please login to submit code';
        toast.error(error);
      }
      else if(auth.role=="admin") {
        
        const error: string = `Admin's can't submit`;
        toast.error(error);
      }
      else if (problem&&code&&language) {
      
        // Submit Code to Sphere Engine
        const {difficulty,title} = problem
        const payload = {program:code,language,problemTitle:title,difficulty,problemName:problem.displayName}
        console.log(payload)
        let submissionSuccess: boolean = false;
        console.log(JSON.stringify(payload));
        const submission = await axios.post(`${server_url}/app/v1/submission`,payload,{ headers: { Authorization: `Bearer ${auth.token}` },withCredentials:true})
        if(submission.data.success) submissionSuccess = true
        if (submissionSuccess) {
          toast.success('Submitted Successfully!');
          navigate('/submissions');
        } else {
          const error: string = 'Error Submitting Code! Please Try Again.';
          toast.error(error);
        }
      }
      else {
        const error: string = 'Error Submitting Code! Please Try Again.';
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
        className="font-bold uppercase"
        onClick={submitCode}
        disabled={loadingstate}
      >
        Submit
      </Button>
    </div>
  );
};

export default Submit;
