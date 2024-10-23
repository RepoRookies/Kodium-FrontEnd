import { Difficulty, Status } from '@/types/types';

export interface IProblemData {
  status: Status;
  title: string;
  url: string;
  tags: string[];
  difficulty: Difficulty;
}
