import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductImage, ProductButtons, ProductTitle } from ".";
import { ProductCard as ProductCardHOC } from "./ProductCard";

export * from "./ProductButtons";
export * from "./ProductImage";
export * from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
