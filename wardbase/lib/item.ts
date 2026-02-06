'use server';

import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

export async function postItem(
  itemInput: Prisma.ItemCreateInput
): Promise<number> {
  const { id } = await prisma.item.create({
    data: {
      label: itemInput.label,
    },
  });

  return id;
}
