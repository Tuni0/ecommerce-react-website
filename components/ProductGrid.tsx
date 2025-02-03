"use client";

import { Product } from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumbnail from "./ProductThumbnail";

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <AnimatePresence key={product._id}>
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" justify-center "
          >
            <ProductThumbnail key={product._id} product={product} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
}

export default ProductGrid;
