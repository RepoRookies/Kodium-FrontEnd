export interface IProblemData {
  id: number;
  title: string;
  difficulty: string;
  tags: string[];
  description: string;
  input_format: string;
  output_format: string;
  constraints: string[];
  exampleTestCases: {
    input: number[];
    output: number[];
  }[];
  hints: string[];
}
