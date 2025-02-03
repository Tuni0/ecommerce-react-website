import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";
async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    return <div>No products found for {query}</div>;
  }

  return (
    <div>
      <h1>Search Page for {query}</h1>
      <ProductGrid products={products} />
    </div>
  );
}

export default SearchPage;
