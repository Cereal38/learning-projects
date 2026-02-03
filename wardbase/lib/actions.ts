import { ItemZodSchema } from '@/validators/item-form-data';
import { Prisma } from '@prisma/client';

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

  const itemFormData: Prisma.ItemCreateInput = zodResult.data;

  console.log(itemFormData);
}
