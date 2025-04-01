"use client";
import React, { useState, use } from "react";
import { products } from "@/assets/productData";
import { Star } from "lucide-react";
import Image from "next/image";
import { productsDummyData } from "@/assets/assets";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const garbage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Sed molestie. Sed id risus. Ut sagittis odio nec libero.`;

const ProductPage = ({ params }) => {
    const router = useRouter();
  // Try to find product in both data sources
  const unwappedParams = use(params);
  const productId = parseInt(unwappedParams.id);
  const product = products.find((p) => p.id === productId);
  const parsedProd = productsDummyData.find((p) => p._id === unwappedParams.id);

  // If found in dummy data, convert to product format
  const productData = parsedProd
    ? {
        id: parsedProd._id,
        name: parsedProd.name,
        description: parsedProd.description,
        rating: 4,
        price: "$" + parsedProd.offerPrice,
        depPrice: parsedProd.price,
        imgSrc: parsedProd.image[0],
        secImages: parsedProd.image,
        brand: parsedProd.name.split(" ")[0],
        color: ["black", "white", "Blue"],
        category: parsedProd.category,
      }
    : { ...product, description: product.description + garbage };

    const handleAddToCart = () => {
        toast.success("Product Added to cart Successfully")
    }

    const handleBuyNow = () => {
        router.push('/cart');
        console.log("Buy")
    }

  // Check if product exists in either data source
  if (!product && !parsedProd) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-orange-400 hover:bg-orange-600 text-white rounded-lg"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  const [selectedImg, setSelectedImg] = useState(productData.imgSrc);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={selectedImg}
            alt={productData.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="flex gap-2 items-center">
            {productData.secImages ? (
              <>
                {productData.secImages.map((img) => (
                  <Image
                    key={img}
                    onClick={() => setSelectedImg(img)}
                    className="hover:shadow-lg transition"
                    src={img}
                    height={100}
                    width={100}
                    alt={`${img}`}
                  />
                ))}
              </>
            ) : (
              <>
                <div className="bg-gray-400 cursor-pointer rounded-md shadow w-[100px] h-[100px] flex text-3xl font-bold items-center justify-center text-white hover:bg-gray-700 transition ">
                  1
                </div>
                <div className="bg-gray-400 cursor-pointer rounded-md shadow w-[100px] h-[100px] flex text-3xl font-bold items-center justify-center text-white hover:bg-gray-700 transition ">
                  2
                </div>
                <div className="bg-gray-400 cursor-pointer rounded-md shadow w-[100px] h-[100px] flex text-3xl font-bold items-center justify-center text-white hover:bg-gray-700 transition ">
                  3
                </div>
                <div className="bg-gray-400 cursor-pointer rounded-md shadow w-[100px] h-[100px] flex text-3xl font-bold items-center justify-center text-white hover:bg-gray-700 transition ">
                  4
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
          <p className="text-gray-600 mb-6">{productData.description}</p>

          <div className="flex flex-col mb-6">
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-2">
                {productData.rating}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, id) =>
                  id + 1 <= productData.rating ? (
                    <Star key={id} size={20} fill="#F2C464" stroke="none" />
                  ) : (
                    <Star key={id} size={20} fill="#F5F5DC" stroke="none" />
                  )
                )}
              </div>
            </div>
            <div className="text-2xl pb-5 font-bold mt-4 border-b border-gray-300">
              {productData.price}{" "}
              <span className="line-through text-base font-light text-gray-400">
                {productData.depPrice && productData.depPrice}
              </span>{" "}
            </div>

            {productData.brand && productData.category && productData.color && (
              <div className="mt-5">
                <div className="grid grid-cols-2 space-x-4 space-y-2 text-gray-600">
                  <div className="flex flex-col gap-2 mt-2">
                    <h1>Brand</h1>
                    <h1>Color</h1>
                    <h1>Category</h1>
                  </div>
                  <div className="flex flex-col gap-2 mt-2 font-semibold text-black">
                    <div>{productData.brand}</div>
                    <div className="flex gap-4">
                      {productData.color.map((color) => (
                        <div
                          key={color}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border-gray-300 cursor-pointer border shadow-lg ${
                            color.toLowerCase() === "black"
                              ? "bg-black text-white"
                              : color.toLowerCase() === "white"
                              ? "bg-white border-black"
                              : color.toLowerCase() === "blue"
                              ? "bg-blue-500 text-white"
                              : ""
                          }`}
                        >
                          {" "}
                        </div>
                      ))}
                    </div>
                    <div>{productData.category}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button onClick={handleAddToCart} className="border border-gray-400 text-black hover:bg-black hover:text-white transition px-6 py-3 rounded-lg">
              Add to Cart
            </button>
            <button onClick={handleBuyNow} className="bg-orange-400 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
