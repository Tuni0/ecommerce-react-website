import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "@/components/ProductsView";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) +
      ` ${products.length} + ${categories.length} products`
  );
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-center">Hello 123</p>

      <div className="flex flex-col items-center justify-top min-h-screen bg-grey-100 p-4 w-full">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
