'use server';

import { ImageFormData } from '@/models/image-form-data';
import { prisma } from './prisma';
import { ImageData } from '@/models/image-data';

export async function postImage(formData: FormData) {
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

export async function getImageById(id: string): Promise<ImageData | null> {
  const numericId: number = Number(id);
  if (!Number.isInteger(numericId)) {
    throw new Error('Invalid id');
  }

  return prisma.image.findUnique({
    where: { id: numericId },
    select: {
      id: true,
      author: true,
      description: true,
      createdAt: true,
    },
  });
}
