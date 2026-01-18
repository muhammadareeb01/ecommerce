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

export const GET_HOME_PAGE_CONTENT_QUERY = groq`*[_type == "page" && slug.current == "home"][0] {
  heading,
  subheading,
  description,
  "heroImage": mainImage.asset->url
}`;

export const GET_CATEGORIES_WITH_PRODUCTS_QUERY = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current,
  description,
  "image": image.asset->url,
  "products": *[_type == "product" && references(^._id)] {
    _id,
    name,
    "slug": slug.current,
    price,
    "image": image.asset->url,
    description,
    "category": ^.title
  }
}`;

export const GET_CATEGORY_PAGE_DATA_QUERY = groq`*[_type == "category" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  metaTitle,
  metaDescription,
  pageHeading,
  pageSubheading,
  pageContent,
  ctaText,
  "image": image.asset->url,
  "products": *[_type == "product" && references(^._id)] {
    _id,
    name,
    "slug": slug.current,
    "category": ^.title,
    price,
    "image": image.asset->url,
    description
  }
}`;

export const GET_SETTINGS_QUERY = groq`*[_type == "settings"][0] {
  title,
  "logoUrl": logo.asset->url
}`;

export const GET_WHOLESALE_PAGE_DATA_QUERY = groq`*[_type == "wholesale"][0] {
  heading,
  description,
  features
}`;
