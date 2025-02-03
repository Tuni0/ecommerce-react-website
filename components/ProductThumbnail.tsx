import { Product } from "@/sanity.types";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

function ProductThumbnail({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Card>
      <Link
        href={`/products/${product.slug?.current}`}
        className={`group flex flex-col  hover:shadow-lg transition-all duration-200 overflow-hidden ${
          isOutOfStock ? "opacity-50" : ""
        }`}
      >
        <div className="relative aspect-square w-full h-full overflow-hidden">
          <CardHeader>
            {product.image && (
              <Image
                className="object-contain transition-transform duration-300 group-hover:scale-105 w-full h-full"
                src={imageUrl(product.image).url()}
                alt={product.name || "Product image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw ,33vw"
              ></Image>
            )}
          </CardHeader>
          <div>
            {isOutOfStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  Out of stock
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="p-4">
          <CardContent>
            <h2 className="text-lg font-semibold  truncate">{product.name}</h2>
            <p className="mt-2 text-sm  line-clamp-2">
              {product.description?.slice(0, 100) || "No description"}
              {product.description && product.description.length > 100
                ? "..."
                : ""}
            </p>

            <p className="mt-2 text-lg font-semibold ">
              {product.price?.toFixed(2)} PLN
            </p>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}

export default ProductThumbnail;
