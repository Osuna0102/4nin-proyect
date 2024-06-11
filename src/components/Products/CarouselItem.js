import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselItem({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image.url} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price.formatted_with_symbol}</p>
    </div>
  );
}

function ProductsCarousel({ products }) {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Carousel showThumbs={false} dynamicHeight={false} emulateTouch={true} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} swipeable={true} centerMode centerSlidePercentage={33}>
        {filteredProducts.map((product) => (
          <CarouselItem key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
}

export default ProductsCarousel;