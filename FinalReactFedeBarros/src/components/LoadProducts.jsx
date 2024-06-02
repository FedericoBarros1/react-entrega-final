import React, { useEffect } from 'react';
import { fetchProducts } from '../utils/fetchProducts';
import { loadProductsToFirebase } from '../utils/loadProductsToFirebase';

const LoadProducts = () => {
  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      await loadProductsToFirebase(products);
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h2>Loading Products...</h2>
    </div>
  );
};

export default LoadProducts;
