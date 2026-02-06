import { ItemZodSchema } from '@/validators/item-form-data';
import z from 'zod';

// Null represents the initial state or a successful submission
export type AddItemActionState = {
  errors: z.inferFlattenedErrors<typeof ItemZodSchema>['fieldErrors'];
} | null;
