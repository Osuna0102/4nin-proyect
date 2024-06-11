import React, { useState, useEffect } from 'react';
import { commerce } from '../../libs/commerce';
import ProductsCarousel from './CarouselItem';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductsCarousel products={products} />
    </div>
  );
}

export default Products;