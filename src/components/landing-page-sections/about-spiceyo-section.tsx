import Image from "next/image";
import SpiceyO from "/public/images/all_products.jpg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const AboutSpiceyoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#F8F5F0] pb-24" ref={sectionRef}>
      <motion.div 
        className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            whileHover={{ rotateY: 5, rotateX: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={SpiceyO}
              alt="Various types of uncooked pasta"
              className="rounded-2xl object-cover w-full h-full"
              width={600}
              height={800}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="bg-white p-12 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 30 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.h2 
            className="text-5xl font-serif text-[#0A3A2A]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Local is powerful
          </motion.h2>
          <motion.p 
            className="mt-6 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We take pride in supporting local farmers and sourcing the freshest
            ingredients, ensuring that every jar of Spicey-O embodies the
            essence of authenticity and deliciousness.{" "}
          </motion.p>
          <motion.p 
            className="mt-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Our commitment to quality means using 100% locally sourced Kenyan
            ingredients. Each product is handcrafted with care, knowing that it
            is made with respect for the environment and the communities we work
            with.{" "}
          </motion.p>
          <motion.p 
            className="mt-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            This appears to be another section from the same Spicey-O brand
            website, focusing on their commitment to local sourcing and
            community support. The image shows their product jars with labels,
            emphasizing their locally-made spices and chutneys.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
