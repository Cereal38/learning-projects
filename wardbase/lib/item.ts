'use server';

import { prisma } from './prisma';
import { randomUUID } from 'node:crypto';
import { uploadToBucket } from './s3';
import { ItemInput } from '@/models/item-input';

export async function postItem(itemInput: ItemInput): Promise<number> {
  // Bufferize the image and upload it to s3 (If image exists)
  const image: File | undefined = itemInput.image;
  let imageKey: string | undefined = undefined;
  if (image) {
    const arrayBuffer = await image.arrayBuffer();
    const body: Buffer<ArrayBuffer> = Buffer.from(arrayBuffer);
    imageKey = `image-${randomUUID()}`;
    const bucketName: string = 'wardbase';
    await uploadToBucket(imageKey, image.type, body, bucketName);
  }

  const { id } = await prisma.item.create({
    data: {
      label: itemInput.label,
      imageKey: imageKey,
    },
  });

  return id;
}
