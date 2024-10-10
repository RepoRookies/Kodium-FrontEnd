import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FlickerTitle from '@/components/FlickerEffect/FlickerEffectTitle.tsx';
import { DiamondPlus } from 'lucide-react';

interface AbstractImage {
  title: string;
  url: string;
  alt: string;
}

type AbstractImages = AbstractImage[];

const abstractImages: AbstractImages = [
  {
    title: 'Dummy Image - 1',
    url: 'https://t3.ftcdn.net/jpg/07/83/35/90/360_F_783359002_sKIO0OlaWamE8kioT7ZZh56r1da4R8Iu.jpg',
    alt: 'Dummy Image - 1',
  },
  {
    title: 'Dummy Image - 2',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGpyXfIm2g1Gcg-yCJTv3aWs8pDELU4fknA&s',
    alt: 'Dummy Image - 2',
  },
  {
    title: 'Dummy Image - 3',
    url: 'https://st3.depositphotos.com/35773592/37728/i/450/depositphotos_377280100-stock-photo-binary-code-background-digital-abstract.jpg',
    alt: 'Dummy Image - 3',
  },
];

const getIndexForToday = (totalImages: number): number => {
  const currentDate = new Date();
  const dayOfYear = Math.floor(
    (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dayOfYear % totalImages;
};

interface Topic {
  title: string;
  description: string;
  editorialUrl: string;
  problemUrl: string;
}

type Topics = Topic[];

const topics: Topics = [
  {
    title: 'Binary Search',
    description:
      'Binary Search is a fundamental algorithm that quickly finds the position of a target value within a sorted array.',
    editorialUrl: '/learn/binary-search',
    problemUrl: '/problems/binary-search',
  },
];

const TopicSection: React.FC = () => {
  const selectedImage = abstractImages[getIndexForToday(abstractImages.length)];
  const selectedTopic = topics[getIndexForToday(topics.length)];

  return (
    <section className="flex flex-col justify-center gap-4 max-w-md">
      <FlickerTitle>
        <DiamondPlus size={32} />
        Topic Of The Day
      </FlickerTitle>
      <Card className="bg-primary text-primary-foreground">
        <div className="h-48 w-full overflow-hidden p-1">
          <img
            title={selectedImage.title}
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{selectedTopic.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="min-h-16">{selectedTopic.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="gold" size="lg" asChild>
            <Link to={selectedTopic.editorialUrl}>Learn</Link>
          </Button>
          <Button variant="gold" size="lg" asChild>
            <Link to={selectedTopic.problemUrl}>Solve</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default TopicSection;
