import { ItemZodSchema } from '@/validators/item-form-data';
import { Prisma } from '@prisma/client';
import { postItem } from './item';
import { ItemInput } from '@/models/item-input';
import { redirect } from 'next/navigation';

export async function addItem(prevState: unknown, formData: FormData) {
  const zodResult = ItemZodSchema.safeParse({
    label: formData.get('label'),
    image: formData.get('image'),
  });

  if (!zodResult.success) {
    return {
      errors: zodResult.error.flatten().fieldErrors,
    };
  }

  const itemInput: ItemInput = zodResult.data;

  const id: number = await postItem(itemInput);

  redirect('/');
  return null;
}
