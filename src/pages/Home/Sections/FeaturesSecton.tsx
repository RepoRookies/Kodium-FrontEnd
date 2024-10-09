import React from 'react'
import FeaturesGrid from '@/components/Features/Features.tsx'
import { Code, Users, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    logo: <Code size={40} className="text-sky" />,
    title: 'Code Editor',
    description: 'A Powerful in-Browser Code Editor with Real-Time Contest Features.',
  },
  {
    logo: <BookOpen size={40} className="text-success" />,
    title: 'Resources',
    description: 'Solve Provlems, and Access Editorials to Improve your Skills.',
  },
  {
    logo: <Users size={40} className="text-gold" />,
    title: 'Community',
    description: 'Join a Vibrant Community of Coders from IIIT Kottayam',
  },
  {
    logo: <Shield size={40} className="text-destructive" />,
    title: 'Security',
    description: 'State-of-the-art Security Features to Keep your Data & Code Safe.',
  },
];

const FeaturesSecton: React.FC = () => {
  return (
    <div className="text-primary-foreground">
      <FeaturesGrid features={features} />
    </div>
  );
}

export default FeaturesSecton