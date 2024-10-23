import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { IProblemData } from '@/pages/ProblemCode/Sections/problem.interface';
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { getDifficultyColor, getStatusIcon } from '@/lib/utils';

interface props {
  problem: IProblemData | any;
  markdown: string;
}

const MarkdownRenderer: React.FC<props> = ({ problem, markdown }) => {
  // Make this Status Dynamic
  const status = 'Unattempted';
  return (
    <>
      <div className="flex flex-row justify-between items-center pt-2 px-6 text-lg text-secondary font-semibold space-x-2 tracking-wide">
        <div className="flex space-x-2">
          <span>Difficulty:</span>
          <span className={getDifficultyColor(problem?.difficulty)}>{problem?.difficulty} </span>
        </div>
        <div className="flex space-x-2">
          <span>Status: </span>
          <span>{getStatusIcon(status)}</span>
        </div>
      </div>
      <Card className="px-4 py-2 mx-2 mb-2 bg-transparent shadow-none text-secondary/80 rounded-md">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <div className="text-4xl text-gold font-bold tracking-wider" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <div className="text-3xl text-gold font-bold tracking-wider" {...props} />
            ),
            h3: ({ node, ...props }) => <div className="text-2xl" {...props} />,
            h4: ({ node, ...props }) => <div className="text-lg" {...props} />,
            h5: ({ node, ...props }) => <div className="text-lg" {...props} />,
            h6: ({ node, ...props }) => <div className="text-base" {...props} />,
            code: ({ node, ...props }) => (
              <code className="bg-primary p-2 my-2 rounded-sm block font-mono text-sm" {...props} />
            ),
            // Override the default <table> rendering
            table: ({ node, ...props }) => (
              <div className="flex rounded-sm overflow-hidden my-4 font-mono">
                <Table {...props} className="p-4 mx-auto">
                  {props.children}
                </Table>
              </div>
            ),
            thead: ({ node, ...props }) => (
              <TableHeader className="text-md text-secondary bg-primary" {...props} />
            ),
            tbody: ({ node, ...props }) => (
              <TableBody {...props} className="text-md text-secondary/90 bg-primary" />
            ),
            tr: ({ node, ...props }) => <TableRow {...props} />,
            th: ({ node, ...props }) => (
              <TableCell
                {...props}
                className="px-4 py-2 text-xl text-primary bg-gold font-bold tracking-wider"
              />
            ),
            td: ({ node, ...props }) => <TableCell className="px-4 py-2" {...props} />,

            // Override <ul> and <ol> to be enclosed by ChadCN's Card component
            ul: ({ node, ...props }) => (
              <Card className="shadow-md rounded-none bg-primary/80 text-secondary/80">
                {props.children}
              </Card>
            ),
            ol: ({ node, ...props }) => (
              <Card className="shadow-md rounded-none bg-primary/80 text-secondary/80">
                {props.children}
              </Card>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </Card>
    </>
  );
};

export default MarkdownRenderer;