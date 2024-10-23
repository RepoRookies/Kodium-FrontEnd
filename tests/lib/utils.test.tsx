import { getStatusIcon, getDifficultyColor, getLangForMonacoEditor, getLangColor, getVerdictColor, cn } from '../../src/lib/utils.tsx';
import { render } from '@testing-library/react';
import { Circle, CircleCheckBig, CircleFadingPlus } from 'lucide-react';

// Mock types for testing
type Status = 'unattempted' | 'attempted' | 'answered';
type Difficulty = 'easy' | 'medium' | 'hard';
type Language = 'java' | 'python' | 'cpp';

describe('utils.tsx', () => {
  describe('getStatusIcon', () => {
    /*
    it('returns Circle for unattempted status', () => {
      const { container } = render(getStatusIcon('unattempted'));
      expect(container.firstChild).toEqual(expect.any(Circle));
    });*/

    /*
    it('returns CircleFadingPlus for attempted status', () => {
      const { container } = render(getStatusIcon('attempted'));
      expect(container.firstChild).toEqual(expect.any(CircleFadingPlus));
    });*/

    /*
    it('returns CircleCheckBig for answered status', () => {
      const { container } = render(getStatusIcon('answered'));
      expect(container.firstChild).toEqual(expect.any(CircleCheckBig));
    });*/

    /*
    it('returns Circle for unknown status', () => {
      const { container } = render(getStatusIcon('unknown'));
      expect(container.firstChild).toEqual(expect.any(Circle));
    });*/
  });

  describe('getDifficultyColor', () => {
    it('returns text-success for easy difficulty', () => {
      expect(getDifficultyColor('easy')).toBe('text-success');
    });

    it('returns text-gold for medium difficulty', () => {
      expect(getDifficultyColor('medium')).toBe('text-gold');
    });

    it('returns text-destructive for hard difficulty', () => {
      expect(getDifficultyColor('hard')).toBe('text-destructive');
    });

    it('returns text-primary-foreground for unknown difficulty', () => {
      expect(getDifficultyColor('unknown')).toBe('text-primary-foreground');
    });
  });

  describe('getLangForMonacoEditor', () => {
    it('returns java for Java language', () => {
      expect(getLangForMonacoEditor('java')).toBe('java');
    });

    it('returns python for Python language', () => {
      expect(getLangForMonacoEditor('python')).toBe('python');
    });

    it('returns cpp for unknown language', () => {
      expect(getLangForMonacoEditor('unknown')).toBe('cpp');
    });
  });

  describe('getLangColor', () => {
    it('returns text-secondary/75 for Java language', () => {
      expect(getLangColor('java')).toBe('text-secondary/75');
    });

    it('returns text-success for Python language', () => {
      expect(getLangColor('python')).toBe('text-success');
    });

    it('returns text-sky for unknown language', () => {
      expect(getLangColor('unknown')).toBe('text-sky');
    });
  });

  describe('getVerdictColor', () => {
    it('returns text-success when isCorrect is true', () => {
      expect(getVerdictColor(true)).toBe('text-success');
    });

    it('returns text-destructive when isCorrect is false', () => {
      expect(getVerdictColor(false)).toBe('text-destructive');
    });
  });

  describe('cn', () => {
    it('combines class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
    });

    it('handles conditional class names', () => {
      expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3');
    });
  });
});
