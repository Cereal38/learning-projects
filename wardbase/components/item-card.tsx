import Image from 'next/image';
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card';
import tshirtImg from '@/assets/tshirt.jpg';
import { Button } from './ui/button';

export default function ItemCard() {
  return (
    <Card className='w-64 p-4'>
      <div className='relative h-32 w-full'>
        <Image alt='tshirt' fill src={tshirtImg} />
      </div>
      <CardHeader>
        <CardTitle>Tshirt</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button className='w-full' variant='destructive'>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
