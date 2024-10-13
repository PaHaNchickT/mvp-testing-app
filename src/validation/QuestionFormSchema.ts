import type { ZodSchema } from 'zod';
import { z } from 'zod';

import { TEXT_CONTENT } from '@/constants/const-text-content';

const QuestionFormSchema = (): ZodSchema => {
  const schema = z.object({
    answer: z.any().refine((value) => value.length, { message: TEXT_CONTENT.questions.errorText }),
  });

  return schema;
};

export default QuestionFormSchema;
