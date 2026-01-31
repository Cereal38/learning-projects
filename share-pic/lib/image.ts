'use server';

import { ImageFormData } from '@/models/image-form-data';
import { prisma } from './prisma';
import { ImageData } from '@/models/image-data';
import { S3 } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';

export async function postImage(imageFormData: ImageFormData) {
  // TODO: Move it to somewhere else so we don't have to write it in any functions
  const s3 = new S3({
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_ENDPOINT_URL,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
    forcePathStyle: true, // Localstack usually needs this
  });

  // Insert file in s3 - Bufferize the file first
  const arrayBuffer = await imageFormData.file.arrayBuffer();
  const body = Buffer.from(arrayBuffer);
  const fileKey = `image-${randomUUID()}`;
  await s3.putObject({
    Bucket: 'share-pic',
    Key: fileKey,
    Body: body,
    ContentType: imageFormData.file.type,
    ContentLength: body.length,
  });

  // Insert in db
  await prisma.image.create({
    data: {
      author: imageFormData.author,
      description: imageFormData.description,
      fileKey: fileKey,
    },
  });
}

function toImageFormData(formData: FormData): ImageFormData {
  const author: unknown = formData.get('author');
  const description: unknown = formData.get('description');
  const file: unknown = formData.get('file');

  if (typeof author !== 'string') throw new Error('Invalid type for author');
  if (typeof description !== 'string')
    throw new Error('Invalid type for description');
  if (!(file instanceof File)) throw new Error('Invalid type for file');

  return { author, description, file };
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
      fileKey: true,
    },
  });
}
