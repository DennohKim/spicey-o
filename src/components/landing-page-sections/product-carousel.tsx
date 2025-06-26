import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import SpiceyO from "/public/images/all_products.jpg";
import LowHeat from "/public/images/low.jpg";
import HotHeat from "/public/images/hot_heat.jpg";
import MediumHeat from "/public/images/medium.jpg";
import VeryHotHeat from "/public/images/very_hot.jpg";
import PickledOnions from "/public/images/pickled_onions.jpg";
import PickledBeets from "/public/images/pickled_beets.jpg";

export const ProductCarousel: React.FC = () => {
  const products = [
    {
      name: "Tomato & Chilli Chutney - Low",
      img: LowHeat,
      description: "Signature base with garlic and ginger. Mildly spicy.",
      price: "Ksh 350",
    },
    {
      name: "Tomato & Chilli Chutney - Medium",
      img: MediumHeat,
      description: "A balanced kick for those who like it warm.",
      price: "Ksh 350",
    },
    {
      name: "Tomato & Chilli Chutney - Hot",
      img: HotHeat,
      description: "Seriously spicy for the heat seekers.",
      price: "Ksh 350",
    },
    {
      name: "Tomato & Chilli Chutney - Very Freakin Hot",
      img: VeryHotHeat,
      description: "For the full-blown chili fiends. Extreme heat!",
      price: "Ksh 350",
    },
    {
      name: "Pickled Onions",
      img: PickledOnions,
      description: "Sharp Bite. Big Flavour. Punguza Boredom.",
      price: "Ksh 350",
    },
    {
      name: "Pickled Beets",
      img: PickledBeets,
      description: "Crimson Crunch. Tangy Love. Farm-to-Fire.",
      price: "Ksh 350",
    },
  ];
  return (
    <section id="products" className="bg-[#F8F5F0] py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-serif text-[#0A3A2A]">
          Spicey O products
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={product.img}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  width={300}
                  height={400}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 tracking-widest text-left">
                {product.name}
              </h3>
              {/* <p className="mt-2 text-xl font-bold text-gray-900 text-left">
                {product.price}
              </p> */}
            </div>
          ))}
        </div>
        <div className="mt-4 text-gray-600 leading-relaxed">
          We&apos;re also developing a line of dipping sauces and trialling new
          seasonal condiments. Stay tuned!
        </div>
        <div className="mt-12">
          <Button
            size="lg"
            className="bg-[#0A3A2A] text-white hover:bg-[#0A3A2A]/90 font-bold rounded-full px-10 py-6 text-base cursor-pointer"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B254717996898&text&type=phone_number&app_absent=0', '_blank')}
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};
