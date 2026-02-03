import Image from 'next/image';
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ItemFormData } from '@/models/item-form-data';

interface ItemCardParams {
  item: ItemFormData;
}

export default function ItemCard({ item }: ItemCardParams) {
  return (
    <Card className='w-64 p-4'>
      <div className='relative h-32 w-full overflow-hidden rounded-md'>
        {/* Blurred background layer */}
        <Image
          alt='tshirt background'
          fill
          src={item.imageUrl}
          className='object-cover blur-2xl scale-100'
          aria-hidden
        />
        {/* Foreground image */}
        <Image
          alt='tshirt'
          fill
          src={item.imageUrl}
          className='object-contain'
        />
      </div>
      <CardHeader>
        <CardTitle>{item.label}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button className='w-full' variant='destructive'>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
