import { Difficulty, Language } from '@/types/types';

export interface ISubmissionData {
  problemName: string;
  problemTitle: string;
  difficulty: Difficulty;
  language: Language;
  program: string;
  verdict: string;
  // isCorrect: boolean;
}
