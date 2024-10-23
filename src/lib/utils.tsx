import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Status, Language, Difficulty } from '@/types/types';
import { Circle, CircleCheckBig, CircleFadingPlus } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatusIcon(status: Status | string | undefined) {
  switch (status?.toLowerCase()) {
    case 'unattempted':
      return <Circle className="text-primary-foreground" />;
    case 'attempted':
      return <CircleFadingPlus className="text-destructive" />;
    case 'answered':
      return <CircleCheckBig className="text-success" />;
    default:
      return <Circle />;
  }
}

export function getDifficultyColor(difficulty: Difficulty | string | undefined) {
  switch (difficulty?.toLowerCase()) {
    case 'easy':
      return 'text-success';
    case 'medium':
      return 'text-gold';
    case 'hard':
      return 'text-destructive';
    default:
      return 'text-primary-foreground';
  }
}

export function getLangForMonacoEditor(lang: Language | string | undefined) {
  switch (lang?.toLowerCase()) {
    case 'java':
      return 'java';
    case 'python':
      return 'python';
    default:
      return 'cpp';
  }
}

export function getLangColor(lang: Language | string | undefined) {
  switch (lang?.toLowerCase()) {
    case 'java':
      return 'text-secondary/75';
    case 'python':
      return 'text-success';
    default:
      return 'text-sky';
  }
}
export function getLanguage(lang:Language){
  switch (lang?.toLowerCase()) {
    case 'java':
      return 'Java';
    case 'python':
      return 'Python';
    case 'cpp':
      return 'C/C++';
    default:
      return "Unknown"
  }
}
export function getVerdictColor(isCorrect: boolean) {
  return isCorrect ? 'text-success' : 'text-destructive';
}
