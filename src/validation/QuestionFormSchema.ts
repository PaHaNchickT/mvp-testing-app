import type { ZodSchema } from 'zod';
import { z } from 'zod';

const QuestionFormSchema = (): ZodSchema => {
  const schema = z.object({
    answer: z.any().refine((value) => value.length, { message: 'Пожалуйста, ответьте на вопрос' }),
  });

  return schema;
};

export default QuestionFormSchema;
