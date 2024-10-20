import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Topic {
  title: string;
  editorialLink: string;
  problemLink: string;
}

// Add problemLinks here
const TopicSet = () => {
  const topics: Topic[] = [
    {
      title: 'Arrays',
      editorialLink: '/learn/arrays',
      problemLink: 'problems/remove-duplicates-from-sorted-array',
    },
    {
      title: 'Linked List',
      editorialLink: '/learn/linked-list',
      problemLink: 'problems/reverse-linked-list',
    },
    {
      title: 'Bit Manipulation',
      editorialLink: '/learn/bit-manipulation',
      problemLink: '',
    },
    {
      title: 'Recursion',
      editorialLink: '/learn/recursion',
      problemLink: '',
    },
    {
      title: 'Binary Search',
      editorialLink: '/learn/binary-search',
      problemLink: '',
    },
    {
      title: 'Merge Sort',
      editorialLink: '/learn/merge-sort',
      problemLink: '',
    },
  ];

  return (
    <Table className="text-primary-foreground font-regular">
      <TableHeader>
        <TableRow className="bg-gold text-primary text-lg font-bold tracking-wide uppercase">
          <TableHead className="w-4xl">Title</TableHead>
          <TableHead className="text-center">Editorial</TableHead>
          <TableHead className="text-right">Problem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topics.map((topic, index) => (
          <TableRow key={index}>
            <TableCell>{topic.title}</TableCell>
            <TableCell className="text-center">
              <Link to={topic.editorialLink} className="text-sky hover:text-sky/70">
                View Editorial
              </Link>
            </TableCell>
            <TableCell className="text-right">
              <Link to={topic.problemLink} className="text-sky hover:text-sky/70">
                Solve Problem
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopicSet;
