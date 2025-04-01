import { ArrowRight, Circle, ExternalLink, Heart, Star } from "lucide-react";
import macbookImage from "@/assets/macbook_image.png";
import Image from "next/image";
import { products } from "@/assets/productData";
import ProductCard from "@/components/ProductCard";
import girlWithHeadphone from "@/assets/girl_with_headphone_image.png";
import girlWithEarphone from "@/assets/girl_with_earphone_image.png";
import boyWithLaptop from "@/assets/boy_with_laptop_image.png";
import JBLheadphones from "@/assets/jbl_soundbox_image.png";
import mdControllerImage from "@/assets/md_controller_image.png";
import Subscribe from "@/components/Subscribe";
import Link from "next/link";

const featuredArr = [
  {
    id: 1,
    title: "Unparalled Sound",
    desc: "Experience crystal clear sound <br/> with premium headphones.",
    src: girlWithHeadphone,
  },
  {
    id: 2,
    title: "Stay connected",
    desc: "Compact and stylish headphones <br/> for every occassion.",
    src: girlWithEarphone,
  },
  {
    id: 3,
    title: "Power in every pixel",
    desc: "Shop the lastest laptops for work,<br/> gaming and more.",
    src: boyWithLaptop,
  },
];

export default function Home() {
  return (
    <div className="py-5">
      <div className="container mx-auto">
        {/* TOP HERO  */}
        <div className="flex items-center flex-col w-full">
          <div className="w-full bg-gray-200 rounded-xl shadow-md  px-20">
            <div className="inset-0 flex items-center justify-between">
              <div className="left">
                <p className="text-orange-400">Exclusive deal 40% Off</p>
                <h1 className="font-bold text-3xl mt-3">
                  Power Meets Elegance - <br />
                  Apple MacBook Pro is Here <br />
                  For You!{" "}
                </h1>
                <div className="flex space-x-4 mt-5">
                  <button className="rounded-full bg-orange-400 cursor-pointer hover:bg-orange-600 transition text-white px-4 py-2">
                    Order Now
                  </button>

                  <button className="border rounded-full px-4 hover:bg-black border-gray-400 items-center hover:text-white transition py-2 cursor-pointer flex gap-2">
                    <p>Learn More</p> <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="right flex items-center justify-center">
                <Image src={macbookImage} width={400} height={200} alt="mac" />
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Circle size={12} stroke="1" fill="orange" />
            <Circle size={12} stroke="1" fill="#E5E5E5" />
            <Circle size={12} stroke="1" fill="#E5E5E5" />
          </div>
        </div>

        {/* POPULAR PRODUCTS  */}
        <section className="mt-15 py-10">
          <h1 className="font-semibold text-2xl text-gray-600 mb-5">
            Popular Products
          </h1>
          <div className="grid grid-cols-5 space-x-4 gap-y-10">
            {products.slice(0, 10).map((p) => {
              return (
                <div key={p.id}>
                  <ProductCard p={p} />
                </div>
              );
            })}
          </div>

          <div className="w-full mt-20 flex items-center justify-center">
            <Link href={"/shop"}>
              <button className="border relative w-fit border-gray-300 hover:border-gray-900 text-gray-500 hover:text-gray-800 transition px-8 py-2 rounded-md text-center">
                See More
              </button>
            </Link>
          </div>
        </section>

        {/* FEATURED PRODUCTS  */}
        <section className="py-10">
          <div className="flex items-center justify-center">
            <h1 className=" font-semibold text-2xl border-b-2 w-fit border-[#FF9900]">
              Featured Products
            </h1>
          </div>
          <div className="flex justify-between items-center mt-4">
            {featuredArr.map((item) => (
              <div
                key={item.id}
                className="w-[400px] h-[500px] hover:scale-105 cursor-pointer transition relative bg-gray-600"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={500}
                />
                <div className="absolute bottom-10 w-full left-10 text-white">
                  <h1 className="font-bold text-2xl">{item.title}</h1>
                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></p>
                  <button className="flex items-center px-3 py-2 bg-orange-400 hover:bg-orange-600 transition gap-2 rounded-md mt-3">
                    Buy now{" "}
                    <span>
                      <ExternalLink size={18} />
                    </span>{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION  */}
        <section className="my-10">
          <div className="bg-gray-300 rounded-lg shadow flex items-center justify-between pl-10">
            <div>
              <Image src={JBLheadphones} width={240} height={600} alt="jbl" />
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-3xl mb-2">
                Level Up Your <br /> Gaming Experience
              </h1>
              <p className="mb-2 text-gray-500">
                From immersive sound to precise controls - <br />
                everything you need to win.
              </p>
              <div className="flex w-full items-center justify-center">
                <button className="flex items-center px-3 py-2 text-white bg-orange-400 hover:bg-orange-600 transition gap-2 rounded-md mt-2">
                  Buy now{" "}
                  <span>
                    <ExternalLink size={18} />
                  </span>{" "}
                </button>
              </div>
            </div>
            <div>
              <Image
                src={mdControllerImage}
                width={300}
                height={600}
                alt="controller"
              />
            </div>
          </div>
        </section>

        {/* SUBSCRIBE TO US  */}
        <Subscribe />
      </div>
    </div>
  );
}
