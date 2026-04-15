import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsDetailsPage({ params }) {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug == slug);

  return (
    <main>
      <h1>{newsItem.title}</h1>
    </main>
  );
}
