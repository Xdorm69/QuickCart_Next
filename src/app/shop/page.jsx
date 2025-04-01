import React from 'react'
import { products } from '@/assets/productData'
import ProductCard from '@/components/ProductCard'
import { productsDummyData } from '@/assets/assets';

const AllProducts = () => {
  return (
    <section className="my-10 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4 gap-y-10">
            {productsDummyData.map(item => {
                const ParsedItem = JSON.parse(JSON.stringify(item));
                const convertedObj = {
                    id: ParsedItem._id,
                    name: ParsedItem.name,
                    description: ParsedItem.description,
                    rating: 4,
                    price: "$" + ParsedItem.offerPrice,
                    imgSrc: ParsedItem.image[0],
                    depPrice: ParsedItem.price,
                }
                return (
                <div key={item._id}>
                    <ProductCard p={convertedObj} />
                </div>
            )})}
          {products.map((item) => (
            <div key={item.id}>
              <ProductCard p={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProducts