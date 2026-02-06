import Image from 'next/image';
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Item } from '@prisma/client';

interface ItemCardParams {
  item: Item;
}

export default function ItemCard({ item }: ItemCardParams) {
  const imageUrl: string | undefined = item.imageKey
    ? `${process.env.AWS_ENDPOINT_URL}/wardbase/${item.imageKey}`
    : undefined;

  return (
    <Card className='w-64 p-4'>
      <div className='relative h-32 w-full overflow-hidden rounded-md'>
        {!!imageUrl && (
          <>
            {/* Blurred background layer */}
            <Image
              alt='background'
              fill
              src={imageUrl}
              className='object-cover blur-2xl scale-100'
              aria-hidden
              unoptimized
            />
            {/* Foreground image */}
            <Image
              alt={item.label}
              fill
              src={imageUrl}
              className='object-contain'
              unoptimized
            />
          </>
        )}
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
