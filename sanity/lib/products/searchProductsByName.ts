import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParams: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[_type == "product" && name match $searchParams] | order(name asc)
    `);

  try {
    //send query to sanity witch search parameter
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: { searchParams: `${searchParams}*` }, //append wildcard for partial match
    });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products by name", error);
    return [];
  }
};
