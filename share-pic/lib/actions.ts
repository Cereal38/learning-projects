import { z } from 'zod';

const schema = z.object({
  author: z.string().trim().min(1, { message: 'Author is required' }).max(80),
  description: z.string().trim().max(300).optional(),
});

export async function shareImage(prevState: unknown, formData: FormData) {
  const authorRaw = formData.get('author');
  const descriptionRaw = formData.get('description');

  const zResult = schema.safeParse({
    author: typeof authorRaw === 'string' ? authorRaw : '',
    description: typeof descriptionRaw === 'string' ? descriptionRaw : '',
  });

  if (!zResult.success) {
    const filedError = zResult.error.flatten().fieldErrors;
  }
}
