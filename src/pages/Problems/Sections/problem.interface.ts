import { Difficulty, Status } from '@/types/types';

export interface IProblemData {
  status: Status;
  title: string;
  tags: string[];
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  timeLimit: number,
  memoryLimit: number,
  exampleTestCases: {
    input: string;
    output: string;
  }[],
  difficulty: Difficulty;
  hints: string[];
}

