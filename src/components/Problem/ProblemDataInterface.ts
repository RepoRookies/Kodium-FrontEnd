export interface IProblemData{
    id: number;
    title: string;
    difficulty: string;
    tags: string[];
    description: string;
    input_format: string;
    output_format: string;
    constraints: string[];
    example_test_cases: {
      input: {
        nums: number[];
        target: number;
      };
      output: number[];
    }[];
    hints: string[];
  }