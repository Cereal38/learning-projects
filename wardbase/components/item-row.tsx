import { getAllItems } from '@/lib/item';
import { Item } from '@prisma/client';
import ItemCard from './item-card';

export default async function ItemRow() {
  const items: Item[] = await getAllItems();

  return (
    <div className='flex flex-row gap-4 flex-wrap'>
      {items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}
