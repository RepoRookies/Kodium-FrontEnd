import React from 'react';
import { Link } from 'react-router-dom';
import { IProblemData } from './problem.interface';
import { getStatusIcon, getDifficultyColor } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

type Problems = IProblemData[];

const problems: Problems = [
  {
    status: 'Unattempted',
    title: 'Search Insert Position',
    url: 'search-insert-position',
    tags: ['Array', 'Binary Search'],
    difficulty: 'Easy',
  },
  {
    status: 'Unattempted',
    title: 'Sudoku Solver',
    url: 'sudoku-solver',
    tags: ['Array', 'Hash Table', 'Backtracking', 'Matrix'],
    difficulty: 'Medium',
  },
  {
    status: 'Unattempted',
    title: 'Combination Sum',
    url: 'combination-sum',
    tags: ['Array', 'Backtracking'],
    difficulty: 'Medium',
  },
  {
    status: 'Answered',
    title: 'Longest Substring Without Repeating Characters',
    url: 'longest-substring-without-repeating-characters',
    tags: ['String', 'Hash Table', 'Backtracking'],
    difficulty: 'Hard',
  },
  {
    status: 'Unattempted',
    title: 'Remove Duplicates from Sorted Array',
    url: 'remove-duplicates-from-sorted-array',
    tags: ['Array', 'Two Pointers'],
    difficulty: 'Easy',
  },
  {
    status: 'Answered',
    title: 'Merge Sorted Array',
    url: 'merge-sorted-array',
    tags: ['Array', 'Divide and Conquer'],
    difficulty: 'Medium',
  },
  {
    status: 'Attempted',
    title: 'Search in Rotated Sorted Array',
    url: 'search-in-rotated-sorted-array',
    tags: ['Array', 'Binary Search'],
    difficulty: 'Medium',
  },
];

const ProblemSet: React.FC = () => {
  return (
    <Table className="text-primary-foreground font-regular">
      <TableHeader>
        <TableRow className="bg-gold text-primary text-lg font-bold tracking-wide uppercase">
          <TableHead className="w-4">Status</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="text-center">Difficulty</TableHead>
          <TableHead className="text-right">Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems.map((problem, index) => (
          <TableRow key={index}>
            <TableCell>{getStatusIcon(problem.status)}</TableCell>
            <TableCell>
              <Link to={`/problems/${problem.url}`} className="hover:text-sky">
                {problem.title}
              </Link>
            </TableCell>
            <TableCell className={cn('text-center', getDifficultyColor(problem.difficulty))}>
              {problem.difficulty}
            </TableCell>
            <TableCell className="text-right space-x-2">
              {problem.tags.map((tag, index) => (
                <Badge key={index} variant="gold">
                  {tag}
                </Badge>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProblemSet;
