import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import FlickerTitle from '@/components/FlickerEffect/FlickerEffectTitle';

import MarkdownRenderer from '@/pages/ProblemCode/Sections/MarkdownRenderer';
import CodeEditor from '@/pages/ProblemCode/Sections/CodeEditor';
import Submit from '@/pages/ProblemCode/Sections/Submit';
// import { IProblemData } from '@/pages/ProblemCode/Sections/problem.interface';
// import ProblemData from '@/pages/ProblemCode/Sections/problem.data.json';
import { useProblemDetails } from '@/hooks/queries';
import { toast } from 'sonner';
import Run from './Sections/Run';

// const fetchProblemData = (): Promise<IProblemData> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ProblemData.problem as IProblemData);
//     }, 1000);
//   });
// };

const Problem: React.FC = () => {
  const { title } = useParams<string>();
  const navigate = useNavigate()
  if(!title){
    toast.error(`Problem Does Not Exist`)
    navigate('/')
  }
  const {data:problem,isLoading,isError} = useProblemDetails(title!)
  console.log(problem)
  // const [problem, setProblem] = useState<IProblemData | null>(null);
  // const [loadingstate, setLoadingState] = useState<boolean>(true);
  const [code, setCode] = useState<string>(`// Your Code Goes Here `);
  const [input,setInput] =useState<string>("")
  const [output,setOutput] =useState<string>("")
  const [language, setLanguage] = useState<string>('cpp');
  console.log(code)
  const [leftPanelText, setLeftPanelText] = useState<string>(`
## Problem Description
##### Lorem Ipsum dolor .....

| Input | Output |
|----------|----------|
| 5    |  YES   |
| 1 2 3 4 7        | NO   |
| 3    |    |
| 1 2 4 7        |    |

`);

  const defaultCodeHandler = (language: string) => {
    setLanguage(language);
    switch (language) {
      case 'python':
        setCode(`# Your Code Goes Here `);
        break;
      default:
        setCode(`// Your Code Goes Here `);
        break;
    }
  };

  useEffect(() => {
    defaultCodeHandler(language);
  }, [language]);

  // useEffect(() => {
  //   fetchProblemData().then((data) => {
  //     setProblem(data);
  //     setLoadingState(false);
  //   });
  // }, []);  

  useEffect(() => {
    setLeftPanelText(`
## ${problem?.displayName || problem?.title} 
#### ${problem?.description}
| INPUT | OUTPUT  |
|--|--|
${problem?.exampleTestCases
  .map(
    (val: { input: string; output: string }
      // , index: number
    ) =>
      `| ${val.input} | ${val.output} |`
  )
  .join('\n')}
${problem?.constraints?.length ? `### Constraints` : ``}
\`\`\`
${problem?.constraints.map((val: string, 
  // index: number
) => `${val}`).join('\n')}
\`\`\`

${problem?.constraints?.length ? `### Hints` : ``}
${problem?.hints.map((val: string, 
  // index: number
  )   => `\` ${val} \``).join('  ')}
`);
  }, [problem]);

  if (isLoading) {
    return (
      <div className="w-full h-full text-center">
        <FlickerTitle className="mt-36 text-4xl">Loading . . .</FlickerTitle>
      </div>
    );
  }
  if(isError){
    toast.error(`Error fetching Problem`)
    return (
      <div className="w-full h-full text-center">
        <FlickerTitle className="mt-36 text-4xl">Error</FlickerTitle>
      </div>
    );
  }
  return (
    <div className="min-h-[100vh] w-full p-0 ">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-full rounded-lg md:min-w-[450px]"
      >
        <ResizablePanel className="w-[50%] text-4xl min-w-[30%]">
          <MarkdownRenderer problem={problem!} markdown={leftPanelText} />
        </ResizablePanel>
        <ResizableHandle className="border-gold border-2" />
        <ResizablePanel className="w-[50%] text-4xl min-w-[30%]">
          <div className='w-[100%] h-[100%]'>
          <CodeEditor code={code} language={language} setCode={setCode} setLanguage={setLanguage} />
            <div className='grid grid-cols-2  w-[100%] justify-center m-auto gap-5 mt-5 h-[15%]'>
              <textarea 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className=" text-sm w-[90%] justify-center m-auto h-[100%] bg-[#1e1e1e] rounded-lg p-2 text-slate-400" 
                placeholder="Input Goes Here"
              />
              <textarea 
                readOnly
                value={output}
                className=" text-sm w-[90%] justify-center m-auto h-[100%] bg-[#1e1e1e] rounded-lg p-2 text-slate-400" 
                placeholder="Output Goes Here (First 255 bytes only)"
              />
            </div>
            <div className='flex justify-end mt-2'>
              <Run code={code} language={language} input={input} setOutput={setOutput}/>
              <Submit problem={problem} code={code} language={language} />
            </div>
          </div>  
      
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Problem;
