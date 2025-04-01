"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";

export function OrderItems({ products }) {
  const [updatedProducts, setUpdatedProducts] = useState(products);

  useEffect(() => {
    setUpdatedProducts(products);
  }, [products]);

  const handleQuantityChange = (productId, action) => {
    const updated = updatedProducts.map((product) => {
      if (product._id === productId) {
        if (action === "dec" && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        } else if (action === "dec" && product.quantity == 1) {
          toast.error("Cannot remove any more items");
        }

        if (action == "inc") {
          return { ...product, quantity: product.quantity + 1 };
        }
      }
      return product;
    });
    setUpdatedProducts(updated);
  };

  return (
    <div className="space-y-4">
      <table className="w-full mt-4 font-semibold text-gray-600">
        <thead className="border-b border-gray-200">
          <tr className="bg-gray-50">
            <th className="w-1/2 py-4">Product Details</th>
            <th className="w-1/4 py-4">Price</th>
            <th className="w-1/4 py-4">Quantity</th>
            <th className="w-1/4 py-4">Subtotal</th>
          </tr>
        </thead>
        <tbody className="mt-4">
          {updatedProducts.map((product) => (
            <tr key={product._id} className="border-t border-gray-200">
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    className="bg-gray-200 rounded-xl mr-2 shadow"
                    src={product.image[0]}
                    width={100}
                    height={100}
                    alt={product.name}
                  />
                  <div className="flex flex-col">
                    <div className="text-sm">{product.name}</div>
                    <div className="text-xs text-gray-400">{product.brand}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2 text-center">${product.price}</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(product._id, "dec")}
                    className="p-1 rounded-md hover:bg-gray-100 transition"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-sm">{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product._id, "inc")}
                    className="p-1 rounded-md hover:bg-gray-100 transition"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </td>
              <td className="px-4 py-2 text-center">
                ${(product.price * product.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link href="/shop">
          <span className="text-orange-400 hover:text-orange-600 transition">
            Continue Shopping
          </span>
        </Link>
      </div>
    </div>
  );
}
