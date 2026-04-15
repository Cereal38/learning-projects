export default function NewsDetailsPage({ params }) {
  const id = params.id;

  return (
    <main>
      <h1>Item {id}</h1>
    </main>
  );
}
