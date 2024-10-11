export type TQuestion = {
  title: string;
  type: 'radio' | 'check' | 'input' | 'text';
  variants?: string[];
  correctAnswer?: string[];
};
