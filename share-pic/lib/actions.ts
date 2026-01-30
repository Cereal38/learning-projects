import { ImageFormData } from '@/models/image-form-data';
import { z } from 'zod';
import { postImage } from './image';

const imageDataFormSchema = z.object({
  author: z.string().trim().min(1, { message: 'Author is required' }).max(80),
  description: z.string().trim().max(300).optional(),
  file: z
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

export async function shareImage(prevState: unknown, formData: FormData) {
  const imageFormData: ImageFormData = toImageFormData(formData);

  await postImage(imageFormData);
}

function toImageFormData(formData: FormData) {
  const zResult = imageDataFormSchema.safeParse({
    author: formData.get('author'),
    description: formData.get('description'),
    file: formData.get('file'),
  });

  if (!zResult.success) {
    const errorMessage = zResult.error.issues
      .map((issue) => issue.message)
      .join('');
    throw new Error(errorMessage);
  }

  return zResult.data;
}

function isFileLike(value: unknown): value is File {
  // `instanceof File` can fail on the server, so we use a structural check.
  return (
    !!value &&
    typeof value === 'object' &&
    typeof (value as Blob).arrayBuffer === 'function'
  );
}
