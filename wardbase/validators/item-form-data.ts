import { isFileLike } from '@/lib/utils';
import { z } from 'zod';

export const ItemZodSchema = z.object({
  label: z.string().trim().min(1, { message: 'Label is required ' }).max(255),
  image: z
    .custom<File>((value) => isFileLike(value), {
      message: 'Invalid file upload.',
    })
    .refine((file) => file.size > 0, { message: 'File is empty.' })
    .refine((file) => file.type.startsWith('image/'), {
      message: 'Only image files are allowed.',
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'Image is too large (max 5MB).',
    }),
});
