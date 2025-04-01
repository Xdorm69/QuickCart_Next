"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import manWithLaptop from "@/assets/boy_with_laptop_image.png";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCard = ({ p }) => {
  const router = useRouter();
  if (!p) return null;

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    liked && toast.success("Product liked successfully");
  }, [liked]);

  return (
    <div className="rounded-lg overflow-hidden relative hover:scale-105 transition cursor-pointer">
      <div className="bg-gray-200 rounded-lg flex items-center justify-center">
        <div
          onClick={() => setLiked((prev) => !prev)}
          className="absolute top-2 right-2 shadow-lg rounded-full p-2 bg-white"
        >
          <Heart
            size={18}
            fill={liked ? "red" : "#e5e5e5"}
            stroke="#E5E5E5"
          />
        </div>
        <Link href={`/product/${p.id}`}>
          <div>
            <Image
              src={p?.imgSrc || manWithLaptop}
              alt={p?.name || "Product"}
              width={200}
              height={400}
            />
          </div>
        </Link>
      </div>
      <div>
        <h2 className="text-gray-800 font-semibold mt-2">
          {p?.name || "Product"}
        </h2>
        <p className="text-sm">
          {p?.description
            ? p.description.length > 25
              ? p.description.slice(0, 25).trim() + "..."
              : p.description
            : "No description available"}
        </p>
        <div className="flex gap-1 items-center my-2">
          <div className="text-sm">{p?.rating || 0}</div>
          <div className="flex gap-1 items-center">
            {Array.from({ length: 5 }).map((_, id) =>
              (p?.rating || 0) > id ? (
                <div key={id}>
                  <Star size={18} fill="#F2C464" stroke="1" />
                </div>
              ) : (
                <div key={id}>
                  <Star size={18} fill="#F5F5DC" stroke="1" />
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {p.price}
            {p.depPrice && (
              <span className="ml-2 text-sm line-through text-gray-400">
                {p.depPrice}
              </span>
            )}
          </h2>
          <button
            onClick={() => router.push("/cart")}
            className="px-3 cursor-pointer tracking-tighter py-1 border border-gray-200 rounded-full shadow hover:bg-black hover:text-white transition text-gray-500"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
