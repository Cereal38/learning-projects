'use server';

import { ItemZodSchema } from '@/validators/item-form-data';
import { postItem } from './item';
import { ItemInput } from '@/models/item-input';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

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

  revalidatePath('/');
  redirect('/');
}
