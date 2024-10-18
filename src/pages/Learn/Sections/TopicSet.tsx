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
      title: 'Bit Manipulation',
      editorialLink: '/learn/bit-manipulation',
      problemLink: '',
    },
    {
      title: 'Recurssion',
      editorialLink: '/learn/recurssion',
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
    <div className="p-6 bg-primary/85 text-white min-h-svh box-border overflow-y-hidden">
      <h1 className="text-2xl font-semibold mb-4">Learn</h1>
      <Table className="min-w-full divide-y divide-gray-700">
        <TableHeader>
          <TableRow>
            <TableHead className="px-6 py-3 bg-gold text-left text-xs font-medium text-white uppercase tracking-wider">Title</TableHead>
            <TableHead className="px-6 py-3 bg-gold text-left text-xs font-medium text-white uppercase tracking-wider">Editorial Link</TableHead>
            <TableHead className="px-6 py-3 bg-gold text-left text-xs font-medium text-white uppercase tracking-wider">Problem Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic, index) => (
            <TableRow key={index} className="bg-gray-800 hover:bg-gray-700">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">{topic.title}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                <Link to={topic.editorialLink} className="text-blue-400 hover:text-blue-600">
                  View Editorial
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                <Link to={topic.problemLink} className="text-blue-400 hover:text-blue-600">Problem</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TopicSet;
