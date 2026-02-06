import { ItemZodSchema } from '@/validators/item-form-data';
import { Prisma } from '@prisma/client';
import { postItem } from './item';

export async function addItem(prevState: unknown, formData: FormData) {
  const zodResult = ItemZodSchema.safeParse({
    label: formData.get('label'),
  });

  if (!zodResult.success) {
    const errorMessage = zodResult.error.issues
      .map((issue) => issue.message)
      .join('');
    throw new Error(errorMessage);
  }

  const itemInput: Prisma.ItemCreateInput = zodResult.data;

  const id: number = await postItem(itemInput);
}
