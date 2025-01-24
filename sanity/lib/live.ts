import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

const token = process.env.SANITY_READ_TOKEN;
if (!token) {
  throw new Error("SANITY_READ_TOKEN is required");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
});
