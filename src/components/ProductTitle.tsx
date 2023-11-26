import React from 'react';

import styles from '../styles/styles.module.css';

import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({
  title,
  className,
  style,
}: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;
