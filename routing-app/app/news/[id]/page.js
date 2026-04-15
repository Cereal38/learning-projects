'use client';

import { useParams } from 'next/navigation';

export default function NewsDetailsPage() {
  const { id } = useParams();

  return (
    <main>
      <h1>Item {id}</h1>
    </main>
  );
}
