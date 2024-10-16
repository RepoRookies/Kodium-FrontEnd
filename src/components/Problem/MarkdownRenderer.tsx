import React from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell 
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';


interface props{
  markdown: string;
}

const MarkdownRenderer: React.FC<props> = ({markdown}) => {
  return (
    <Card className='p-4 m-2 bg-primary/80 text-secondary/80 rounded-md'>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // Override the default <table> rendering
          table: ({ node, ...props }) => (
            <Table {...props} className="p-4 m-4 mx-auto rounded-md">
              {props.children}
            </Table>
          ),
          thead: ({ node, ...props }) => <TableHeader className='p-2 text-2xl text-secondary bg-primary' {...props} />,
          tbody: ({ node, ...props }) => <TableBody {...props} className='p-2 text-xl text-secondary/90 bg-primary' />,
          tr: ({ node, ...props }) => <TableRow {...props} />,
          th: ({ node, ...props }) => <TableCell {...props} className="p-2 text-2xl text-secondary/90 bg-gold font-bold" />,
          td: ({ node, ...props }) => <TableCell {...props} />,

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
          )
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Card>
  )
}

export default MarkdownRenderer
