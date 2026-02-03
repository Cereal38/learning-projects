import { z } from 'zod';

export interface ItemFormData {
  label: string;
  //imageUrl: string;
}

export const ItemZodSchema = z.object({
  label: z.string().trim().min(1, { message: 'Label is required ' }).max(255),
});
