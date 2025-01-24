async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = await searchParams;
  return (
    <div>
      <h1>Search Page for {query}</h1>
    </div>
  );
}

export default SearchPage;
