'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (isInvalidText(meal.title)) return { message: 'Title required' };
  if (isInvalidText(meal.summary)) return { message: 'Summary required' };
  if (isInvalidText(meal.instructions))
    return { message: 'Instructions required' };
  if (isInvalidText(meal.creator)) return { message: 'Creator required' };
  if (isInvalidText(meal.creator_email))
    return { message: 'Creator email required' };
  if (!meal.image || meal.image.size === 0)
    return { message: 'Image required' };

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}

function isInvalidText(text) {
  return !text || text.trim() === '';
}
