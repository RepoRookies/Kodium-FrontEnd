import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable"
import MarkdownRenderer from '@/components/Problem/MarkdownRenderer';

/************ Interface Import ************/ 
import { IProblemData } from '@/components/Problem/ProblemDataInterface';

/************ Json Data Import ************/ 
import ProblemData from "@/components/Problem/ProblemData.json";

// Simulate fetching problem data with a delay (or replace this with an actual API call)
const fetchProblemData = (): Promise<IProblemData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProblemData.problem as IProblemData);  // Resolve the problem data after a simulated delay
        }, 1000);
    })
};

const markdown = `
## Problem Description
##### Lorem Ipsum dolor .....

| Input | Output |
|----------|----------|
| 5    |  YES   |
| 1 2 3 4 7        | NO   |
| 3    |    |
| 1 2 4 7        |    |

`

const Problem: React.FC = () => {
    const { id:problemId }= useParams<string>()
    const [problem,setProblem] = useState<IProblemData|null>(null);
    const [loadingstate,setLoadingState] = useState<boolean>(true);

    useEffect(() => {
        fetchProblemData().then((data) => {
          setProblem(data);
          setLoadingState(false);
        });
      }, []);

    if (loadingstate) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-primary/80 min-h-[100vh] w-full p-0 '>
            <ResizablePanelGroup
                direction="horizontal"
                className="max-w-full rounded-lg md:min-w-[450px]"
            >
                <ResizablePanel className='w-[50%] text-4xl min-w-[30%]'>
                    Left Problem Page {problemId}<br/>
                    <MarkdownRenderer markdown={markdown}/>
                </ResizablePanel>
                <ResizableHandle className='border-gold border-2' />
                <ResizablePanel className='w-[50%] text-4xl min-w-[30%]'>
                    Right Problem Page {problemId}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default Problem;