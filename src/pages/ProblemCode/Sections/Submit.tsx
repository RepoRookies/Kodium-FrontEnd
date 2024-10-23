import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface props {
  submissionData: any;
}

const Submit: React.FC<props> = ({ submissionData }) => {
  const [loadingstate, setLoadingState] = useState<boolean>(false);
  const timeout = 3000;
  const navigate = useNavigate();

  const fetchSubmissionData = (): Promise<any> => {
    return new Promise((resolve) => {
      setLoadingState(true);
      setTimeout(() => {
        resolve(submissionData);
        submitCode();
      }, timeout);
    });
  };

  useEffect(() => {
    if (loadingstate) {
      const loadId = toast.loading('Submitting Code...');
      setTimeout(() => {
        toast.dismiss(loadId);
      }, timeout);
      setLoadingState(false);
    }
  }, [loadingstate]);

  const submitCode = () => {
    if (submissionData) {
      // Submit Code to Sphere Engine
      const submissionSuccess: boolean = true;
      console.log(JSON.stringify(submissionData));
      if (submissionSuccess) {
        toast.success('Submitted Successfully!');
        navigate('/submissions');
      } else {
        const error: string = 'Error Submitting Code! Please Try Again.';
        toast.error(error);
      }
    }
  };
  return (
    <div className="p-4 pt-0 text-right">
      <Button
        variant="success"
        size="lg"
        className="font-bold uppercase"
        onClick={fetchSubmissionData}
        disabled={loadingstate}
      >
        Submit
      </Button>
    </div>
  );
};

export default Submit;
