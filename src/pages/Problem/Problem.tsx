import React from 'react';
import { useParams } from 'react-router-dom';
import ProblemResizableSplitScreen from '@/components/Problem/ProblemResizableSplitScreen';

const Problem: React.FC = () => {
    const { id:problemId }= useParams<string>()
    return (
        <ProblemResizableSplitScreen problemId={problemId}/>
    );
};

export default Problem;