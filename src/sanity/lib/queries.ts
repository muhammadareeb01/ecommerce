import { groq } from "next-sanity";

export const GET_ALL_PRODUCTS_QUERY = groq`*[_type == "product"] {
  _id,
  name,
  "slug": slug.current,
  "category": category->title,
  price,
  "image": image.asset->url,
  description
}`;

export const GET_ALL_CATEGORIES_QUERY = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current,
  description
}`;

export const GET_CATEGORIES_PAGE_CONTENT_QUERY = groq`*[_type == "page" && slug.current == "categories"][0] {
  heading,
  description
}`;
