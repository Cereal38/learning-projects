'use server';

import { ImageFormData } from '@/models/imageFormData';
import { FormEvent } from 'react';
import { prisma } from './prisma';

export async function submitImage(formData: FormData) {
  const imageFormData: ImageFormData = toImageFormData(formData);

  // Insert in db
  await prisma.image.create({
    data: {
      author: imageFormData.author,
      description: imageFormData.description,
    },
  });
}

function toImageFormData(formData: FormData): ImageFormData {
  const author: unknown = formData.get('author');
  const description: unknown = formData.get('description');

  if (typeof author !== 'string') throw new Error('Invalid type for author');
  if (typeof description !== 'string')
    throw new Error('Invalid type for description');

  return { author, description };
}
