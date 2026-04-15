import Link from 'next/link';

export default function NewsPage() {
  return (
    <main>
      <h1>News</h1>
      <ul className='news-list'>
        <li>
          <Link href='/news/1'>Item 1</Link>
        </li>
        <li>
          <Link href='/news/2'>Item 2</Link>
        </li>
        <li>
          <Link href='/news/3'>Item 3</Link>
        </li>
      </ul>
    </main>
  );
}
