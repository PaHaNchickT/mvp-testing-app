import type { ZodSchema } from 'zod';
import { z } from 'zod';

import { TEXT_CONTENT } from '@/constants/TEXT_CONTENT';

const QuestionFormSchema = (): ZodSchema => {
  const schema = z.object({
    answer: z.any().refine((value) => value.length, { message: TEXT_CONTENT.questions.errorText }),
  });

  return schema;
};

export default QuestionFormSchema;
