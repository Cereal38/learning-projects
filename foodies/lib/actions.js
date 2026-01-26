'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (isInvalidText(meal.title)) throw new Error('Title required');
  if (isInvalidText(meal.summary)) throw new Error('Summary required');
  if (isInvalidText(meal.instructions))
    throw new Error('Instructions required');
  if (isInvalidText(meal.creator)) throw new Error('Creator required');
  if (isInvalidText(meal.creator_email))
    throw new Error('Creator email required');
  if (!meal.image || meal.image.size === 0) throw new Error('Image required');

  await saveMeal(meal);
  redirect('/meals');
}

function isInvalidText(text) {
  return !text || text.trim() === '';
}
