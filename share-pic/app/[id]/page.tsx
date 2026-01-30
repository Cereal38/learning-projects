import { getImageById } from '@/lib/image';
import { ImageData } from '@/models/image-data';
import { notFound } from 'next/navigation';

type PageParams = {
  params: Promise<{ id: string }>;
};

export default async function ImageDetailsPage({ params }: PageParams) {
  const { id } = await params;
  const imageData: ImageData | null = await getImageById(id);

  if (!imageData) {
    notFound();
  }

  return (
    <main>
      <h1>An image by {imageData.author}</h1>
      <p>{imageData.description}</p>
    </main>
  );
}
