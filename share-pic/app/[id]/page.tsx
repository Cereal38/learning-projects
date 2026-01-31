import { Card } from '@/components/ui/card';
import { getImageById } from '@/lib/image';
import { ImageData } from '@/models/image-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CopyUrlButton from '@/components/forms/copy-url-button';

type PageParams = {
  params: Promise<{ id: string }>;
};

export default async function ImageDetailsPage({ params }: PageParams) {
  const { id } = await params;
  const imageData: ImageData | null = await getImageById(id);

  if (!imageData) {
    notFound();
  }

  const imageUrl = `${process.env.AWS_ENDPOINT_URL}/share-pic/${imageData.fileKey}`;

  return (
    <main className='w-full h-screen bg-gray-100 pt-16'>
      <Card className='mx-auto max-w-4xl pt-20 px-8 flex flex-col'>
        <h1>
          An image by <span className='font-bold'>{imageData.author}</span>
        </h1>
        <p>{imageData.description}</p>
        <div className='relative w-full h-96 bg-black'>
          <Image
            className='object-contain'
            src={imageUrl}
            fill
            alt='Shared image'
            unoptimized
          />
        </div>
        <CopyUrlButton label='Copy share link' />
        <Link href='/'>You can share an image by clicking here</Link>
      </Card>
    </main>
  );
}
