import Link from 'next/link';

export default function NewsPage() {
  return (
    <main>
      <h1>News</h1>
      <li>
        <ul>
          <Link href='/news/1'>Item 1</Link>
        </ul>
        <ul>
          <Link href='/news/2'>Item 2</Link>
        </ul>
        <ul>
          <Link href='/news/3'>Item 3</Link>
        </ul>
      </li>
    </main>
  );
}
