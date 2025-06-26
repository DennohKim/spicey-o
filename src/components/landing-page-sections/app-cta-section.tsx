import { Truck, Wallet, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import SpiceyO from "/public/images/all_products.jpg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const AppCtaSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#FBF9F7] py-20" ref={sectionRef}>
      <motion.div 
        className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="space-y-3">
            <motion.h2 
              className="text-primary font-serif text-3xl tracking-tighter sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find Spicey-O Near You
            </motion.h2>
            <motion.p 
              className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We&apos;re keeping it simple and personal for now. Browse our
              range and place your order directly via WhatsApp.
            </motion.p>
            <motion.a
              href="https://api.whatsapp.com/send/?phone=%2B254717996898&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-green-600 hover:underline cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              Order via WhatsApp
            </motion.a>
          </div>
          
          <motion.ul 
            className="grid gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.li 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ x: 10 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Wallet className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="font-medium text-primary ">
                Pay easily with M-Pesa.
              </span>
            </motion.li>
            <motion.li 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ x: 10 }}
            >
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Truck className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="font-medium text-primary">
                We deliver in select Nairobi areas.
              </span>
            </motion.li>
          </motion.ul>
          
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <p className="font-semibold">
              Markets coming soon—follow us for updates!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#EDA337] text-black hover:bg-[#EDA337]/90">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mr-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                </motion.div>
                Browse Products
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Wholesale & Trade: Open to enquiries. Get in touch to stock
            Spicey-O.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="rounded-xl bg-yellow-300 p-6"
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 15 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.02, rotateY: -5 }}
        >
          <motion.div 
            className="relative overflow-hidden rounded-lg bg-orange-100 h-96"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src={SpiceyO} 
              alt="Spicey-O" 
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
