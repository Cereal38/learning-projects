import { getAllItems } from '@/lib/item';
import { Item } from '@prisma/client';
import ItemCard from './item-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default async function ItemCarousel() {
  const items: Item[] = await getAllItems();

  return (
    // <div className='flex flex-row gap-4 flex-wrap'>
    //   {items.map((item) => (
    //     <ItemCard item={item} key={item.id} />
    //   ))}
    // </div>
    <Carousel opts={{ align: 'start' }} className='w-full'>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className='basis-auto'>
            <ItemCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
