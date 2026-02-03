import { ItemFormData, ItemZodSchema } from '@/models/item-form-data';

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

  const itemFormData: ItemFormData = zodResult.data;

  console.log(itemFormData);
}
