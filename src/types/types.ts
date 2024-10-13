export type TQuestion = {
  question: string;
  type: 'radio' | 'check' | 'input' | 'text';
  variants?: string[];
  correctAnswer?: string | string[];
};

export type TOptsForm = { answer: string };
