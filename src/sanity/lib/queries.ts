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

export const GET_PRODUCT_BY_SLUG_QUERY = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  "category": category->slug.current,
  "categoryName": category->title,
  price,
  "image": image.asset->url,
  description,
  wholesalePrice,
  wholesaleMinQty
}`;

export const GET_ALL_FAQS_QUERY = groq`*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer
}`;
