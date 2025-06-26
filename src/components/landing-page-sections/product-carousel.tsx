import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, useInView } from "motion/react";
import LowHeat from "/public/images/low.jpg";
import HotHeat from "/public/images/hot_heat.jpg";
import MediumHeat from "/public/images/medium.jpg";
import VeryHotHeat from "/public/images/very_hot.jpg";
import PickledOnions from "/public/images/pickled_onions.jpg";
import PickledBeets from "/public/images/pickled_beets.jpg";

export const ProductCarousel: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6
      }
    }
  };

  return (
    <section id="products" className="bg-[#F8F5F0] py-12" ref={sectionRef}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl sm:text-5xl font-serif text-[#0A3A2A]"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Spicey O products
        </motion.h2>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.name} 
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    width={300}
                    height={400}
                  />
                </motion.div>
              </motion.div>
              <motion.h3 
                className="mt-4 text-lg font-semibold text-gray-800 tracking-widest text-left"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              >
                {product.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-4 text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We&apos;re also developing a line of dipping sauces and trialling new
          seasonal condiments. Stay tuned!
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-[#0A3A2A] text-white hover:bg-[#0A3A2A]/90 font-bold rounded-full px-10 py-6 text-base cursor-pointer"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B254717996898&text&type=phone_number&app_absent=0', '_blank')}
            >
              SHOP NOW
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
