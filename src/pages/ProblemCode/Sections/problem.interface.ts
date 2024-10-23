export interface IProblemData {
  id: number;
  displayName:string,
  title: string;
  difficulty: string;
  tags: string[];
  description: string;
  input_format: string;
  output_format: string;
  constraints: string[];
  exampleTestCases: {
    input: string;
    output: string;
  }[];
  hints: string[];
}
