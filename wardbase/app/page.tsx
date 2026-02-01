import ItemCard from '@/components/item-card';
import { Item } from '@/models/item';
import Image from 'next/image';

export default function Home() {
  const tshirtItem: Item = {
    label: 'Tshirt tarpin bien',
    imageUrl: 'https://picsum.photos/200',
  };

  const jacketItem: Item = {
    label: 'Veste de ski',
    imageUrl: 'https://picsum.photos/200',
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <div className='flex flex-row gap-8'>
          <ItemCard item={tshirtItem} />
          <ItemCard item={jacketItem} />
        </div>
      </main>
    </div>
  );
}
