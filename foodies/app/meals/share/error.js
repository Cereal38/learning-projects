'use client';

export default function Error({ error }) {
  return (
    <main className='error'>
      <h1>Invalid input!</h1>
      <p>Your meal submission is invalid. Error: {error}</p>
    </main>
  );
}
