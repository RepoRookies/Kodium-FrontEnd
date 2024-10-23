import { Difficulty, Language } from '@/types/types';

export interface ISubmissionData {
  problem: string;
  problemUrl: string;
  difficulty: Difficulty;
  language: Language;
  code: string;
  verdict: string;
  isCorrect: boolean;
}
