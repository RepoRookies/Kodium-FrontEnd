import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ISubmissionData } from './submission.interface';
import {
  getDifficultyColor,
  getLangForMonacoEditor,
  getLangColor,
  getVerdictColor,
  getLanguage
} from '@/lib/utils';
import MonacoEditor from '@monaco-editor/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useUserSubmissions } from '@/hooks/queries';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import FlickerTitle from '@/components/FlickerEffect/FlickerEffectTitle';

// type Submissions = ISubmissionData[];

// const submissions: Submissions = [
//   {
//     problem: 'Problem 1',
//     problemUrl: 'binary-search',
//     difficulty: 'Easy',
//     language: 'C/C++',
//     code: 'int main() { return 0; }',
//     verdict: 'Accepted',
//     isCorrect: true,
//   },
//   {
//     problem: 'Problem 2',
//     problemUrl: 'binary-search',
//     difficulty: 'Medium',
//     language: 'Java',
//     code: 'public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }',
//     verdict: 'Accepted',
//     isCorrect: true,
//   },
//   {
//     problem: 'Problem 3',
//     problemUrl: 'binary-search',
//     difficulty: 'Hard',
//     language: 'Python',
//     code: 'print("Hello, World!")',
//     verdict: 'Time Limit Exceeded',
//     isCorrect: false,
//   },
//   {
//     problem: 'Problem 4',
//     problemUrl: 'binary-search',
//     difficulty: 'Easy',
//     language: 'C/C++',
//     code: 'int main() { return 0; }',
//     verdict: 'Accepted',
//     isCorrect: true,
//   },
//   {
//     problem: 'Problem 5',
//     problemUrl: 'binary-search',
//     difficulty: 'Medium',
//     language: 'Java',
//     code: 'public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }\n',
//     verdict: 'Wrong Answer',
//     isCorrect: false,
//   },
// ];

const SubmissionSet: React.FC = () => {
  const {auth} = useAuth()
  const navigate = useNavigate()
  if(!auth){
    toast.error(`Please login to see submissions`)
    navigate('/login')
  }
  const {data:submissions,isError,isLoading} = useUserSubmissions(auth!)
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
    <Table className="text-primary-foreground">
      <TableHeader>
        <TableRow className="bg-gold text-primary text-lg font-bold tracking-wide uppercase">
          <TableHead className="w-4">Problem</TableHead>
          <TableHead className="text-center">Difficulty</TableHead>
          <TableHead className="text-center">Language</TableHead>
          <TableHead className="text-center">Code</TableHead>
          <TableHead className="text-right">Verdict</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions?.map((submission:ISubmissionData, index:number) => (
          <TableRow key={index}>
            <TableCell className="w-96">
              <Link to={`/problems/${submission.problemTitle}`} className="hover:text-sky">
                {submission.problemName}
              </Link>
            </TableCell>
            <TableCell
              className={cn(
                'text-center font-semibold tracking-wide',
                getDifficultyColor(submission.difficulty)
              )}
            >
              {submission.difficulty}
            </TableCell>
            <TableCell
              className={cn(
                'text-center font-semibold tracking-wide',
                getLangColor(submission.language)
              )}
            >
              {getLanguage(submission.language)}
            </TableCell>
            <TableCell className="text-center">
              <Drawer>
                <DrawerTrigger>
                  <Button variant="default">View</Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-full p-4">
                  <DrawerHeader>
                    <DrawerTitle className="text-center text-gold text-2xl">
                      Code (
                      <span className={cn('mx-2', getLangColor(submission.language))}>
                        {submission.language}
                      </span>
                      )
                    </DrawerTitle>
                  </DrawerHeader>
                  <DrawerDescription className="w-full font-mono text-primary-foreground px-4 my-2 cursor-text select-all">
                    <MonacoEditor
                      height="360px"
                      options={{
                        readOnly: true,
                      }}
                      language={getLangForMonacoEditor(submission.language)}
                      theme="vs-dark"
                      value={submission.program}
                    />
                  </DrawerDescription>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="gold" className="font-semibold w-24">
                        OK
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </TableCell>
            <TableCell
              className={cn(
                'text-right font-semibold tracking-wide',
                getVerdictColor(submission.verdict===`Accepted`)
              )}
            >
              {submission.verdict}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SubmissionSet;
