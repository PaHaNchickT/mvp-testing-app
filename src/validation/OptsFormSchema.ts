import type { ZodSchema } from 'zod';
import { z } from 'zod';

const OptsFormSchema = (): ZodSchema => {
  const schema = z.object({
    answer: z.any().refine((value) => value.length, { message: 'Пожалуйста, выберите вариант ответа' }),
  });

  return schema;
};

export default OptsFormSchema;
