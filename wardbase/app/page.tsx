import AddItemDialog from '@/components/add-item-dialog';
import ItemCarousel from '@/components/item-carousel';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col gap-4 py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <AddItemDialog />
        <ItemCarousel />
      </main>
    </div>
  );
}
