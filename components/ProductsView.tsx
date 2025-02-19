import { Product, Category } from "@/sanity.types";
import ProductGrid from "./ProductGrid";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
  return (
    <div className="w-full gap-4">
      {/*category selector*/}
      <div className="w-full sm:w-[200px]">
        {/*<CategorySelectorComponent categories={categories}*/}
      </div>

      {/*products*/}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />

          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
