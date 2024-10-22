import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import FlickerTitle from '@/components/FlickerEffect/FlickerEffectTitle';
import MarkdownRenderer from '@/pages/ProblemCode/Sections/MarkdownRenderer';
import CodeEditor from '@/pages/ProblemCode/Sections/CodeEditor';
import Submit from '@/pages/ProblemCode/Sections/Submit';
import { IProblemData } from '@/pages/ProblemCode/Sections/problem.interface';
import ProblemData from '@/pages/ProblemCode/Sections/problem.data.json';

const fetchProblemData = (): Promise<IProblemData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ProblemData.problem as IProblemData);
    }, 1000);
  });
};

const Problem: React.FC = () => {
  const { id: problemId } = useParams<string>();
  const [problem, setProblem] = useState<IProblemData | null>(null);
  const [loadingstate, setLoadingState] = useState<boolean>(true);
  const [code, setCode] = useState<string>(`// Your Code Goes Here `);
  const [language, setLanguage] = useState<string>('cpp');
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

  useEffect(() => {
    fetchProblemData().then((data) => {
      setProblem(data);
      setLoadingState(false);
    });
  }, []);

  useEffect(() => {
    setLeftPanelText(`
## ${problem?.title} 
#### ${problem?.description}
| INPUT | OUTPUT  |
|--|--|
${problem?.exampleTestCases
  .map(
    (val: { input: number[]; output: number[] }, index: number) =>
      `| ${val.input.map((e) => e.toString()).join(' ')} | ${val.output.map((e) => e.toString()).join(' ')} |`
  )
  .join('\n')}
${problem?.constraints?.length ? `### Constraints` : ``}
\`\`\`
${problem?.constraints.map((val: string, index: number) => `${val}`).join('\n')}
\`\`\`

${problem?.constraints?.length ? `### Hints` : ``}
${problem?.hints.map((val: string, index: number) => `\` ${val} \``).join('  ')}
`);
  }, [problem]);

  if (loadingstate) {
    return (
      <div className="w-full h-full text-center">
        <FlickerTitle className="mt-36 text-4xl">Loading . . .</FlickerTitle>
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
          <MarkdownRenderer problem={problem} markdown={leftPanelText} />
        </ResizablePanel>
        <ResizableHandle className="border-gold border-2" />
        <ResizablePanel className="w-[50%] text-4xl min-w-[30%]">
          <CodeEditor code={code} language={language} setCode={setCode} setLanguage={setLanguage} />
          <Submit submissionData={problem} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Problem;