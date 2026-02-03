import { z } from 'zod';

export const ItemZodSchema = z.object({
  label: z.string().trim().min(1, { message: 'Label is required ' }).max(255),
});
